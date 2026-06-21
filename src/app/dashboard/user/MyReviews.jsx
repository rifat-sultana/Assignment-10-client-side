"use client";

import { useEffect, useState } from "react";

export default function MyReviews() {
  const [reviews, setReviews] =
    useState([]);

  useEffect(() => {
    const email =
      localStorage.getItem("email");

    fetch(
      `http://localhost:5000/reviews/${email}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-white p-5 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-4">
        My Reviews
      </h2>

      <div className="space-y-4">

        {reviews.map((review) => (
          <div
            key={review._id}
            className="border p-4 rounded-lg"
          >

            <h3 className="font-bold">
              {review.bookTitle}
            </h3>

            <p>
              {review.comment}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}