"use client";

import { useEffect, useState } from "react";

export default function ReadingList() {
  const [books, setBooks] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const email =
      localStorage.getItem(
        "email"
      );

    fetch(
      `http://localhost:5000/readinglist/${email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="text-2xl font-bold">
          Reading List
        </h2>

        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-5 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-6">
        My Reading List
      </h2>

      {books.length === 0 ? (
        <p>
          No delivered books
          found.
        </p>
      ) : (
        <div className="grid md:grid-cols-3 gap-4">

          {books.map((book) => (
            <div
              key={book._id}
              className="border rounded-xl p-4"
            >
              <h3 className="font-bold">
                {book.title}
              </h3>

              <p className="text-green-600 mt-2">
                Delivered
              </p>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}