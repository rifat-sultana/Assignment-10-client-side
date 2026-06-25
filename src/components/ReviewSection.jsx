"use client";

import { useEffect, useState } from "react";

export default function ReviewSection({ bookId }) {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const email = localStorage.getItem("email");

  const loadReviews = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/reviews/book/${bookId}`
      );

      const data = await res.json();

      setReviews(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (bookId) {
      loadReviews();
    }
  }, [bookId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!comment.trim()) {
      alert("Please write a review.");
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/reviews`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bookId,
            userEmail: email,
            rating,
            comment,
          }),
        }
      );

      const data = await res.json();

      if (data.success) {
        alert("Review submitted successfully.");

        setComment("");
        setRating(5);

        loadReviews();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);

      alert("Failed to submit review.");
    }
  };

  return (
    <div className="mt-10">

  <h2 className="text-2xl font-bold mb-6">
    Reviews
  </h2>

  <form
    onSubmit={handleSubmit}
    className="bg-white shadow rounded-xl p-6 space-y-4"
  >

    <div>
      <label className="font-semibold">
        Rating
      </label>

      <select
        className="select select-bordered w-full mt-2"
        value={rating}
        onChange={(e) =>
          setRating(Number(e.target.value))
        }
      >
        <option value={5}>★★★★★</option>
        <option value={4}>★★★★☆</option>
        <option value={3}>★★★☆☆</option>
        <option value={2}>★★☆☆☆</option>
        <option value={1}>★☆☆☆☆</option>
      </select>
    </div>

    <div>
      <label className="font-semibold">
        Comment
      </label>

      <textarea
        className="textarea textarea-bordered w-full mt-2"
        rows={4}
        placeholder="Write your review..."
        value={comment}
        onChange={(e) =>
          setComment(e.target.value)
        }
      />
    </div>

    <button
      type="submit"
      className="btn btn-primary"
    >
      Submit Review
    </button>

  </form>

  <div className="mt-8 space-y-4">

  </div>
      {reviews.length === 0 ? (
      <p className="text-gray-500">
        No reviews yet.
      </p>
    ) : (
      reviews.map((review) => (
        <div
          key={review._id}
          className="bg-white border rounded-xl p-5"
        >
          <div className="flex justify-between items-center">

            <h4 className="font-semibold">
              {review.userEmail}
            </h4>

            <span className="text-yellow-500 font-bold">
              {"★".repeat(review.rating)}
            </span>

          </div>

          <p className="mt-3 text-gray-700">
            {review.comment}
          </p>

          <p className="text-sm text-gray-400 mt-3">
            {review.createdAt
              ? new Date(
                  review.createdAt
                ).toLocaleDateString()
              : ""}
          </p>
        </div>
      ))
    )}

  </div>

  );
}