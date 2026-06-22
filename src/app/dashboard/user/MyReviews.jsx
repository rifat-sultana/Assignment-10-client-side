"use client";

import { useEffect, useState } from "react";

export default function MyReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/reviews/user@gmail.com")
      .then((res) => res.json())
      .then((data) => {
        console.log("Reviews API:", data);

        if (Array.isArray(data)) {
          setReviews(data);
        } else {
          setReviews([]);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error("Review Fetch Error:", error);
        setReviews([]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="text-2xl font-bold">
          My Reviews
        </h2>

        <p className="mt-4">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">
        My Reviews
      </h2>

      {reviews.length === 0 ? (
        <p className="text-gray-500">
          No reviews found.
        </p>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="border p-4 rounded-lg"
            >
              <h3 className="font-bold text-lg">
                {review.bookTitle}
              </h3>

              <p className="text-yellow-500">
                ⭐ {review.rating}/5
              </p>

              <p className="mt-2">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}