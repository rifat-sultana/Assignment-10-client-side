"use client";

import { useEffect, useState } from "react";

export default function ReadingList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const email =
      localStorage.getItem("email");

    fetch(
      `http://localhost:5000/readinglist/${email}`
    )
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-white p-5 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-4">
        Reading List
      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        {books.map((book) => (
          <div
            key={book._id}
            className="card bg-base-100 shadow"
          >
            <div className="card-body">

              <h2 className="font-bold">
                {book.title}
              </h2>

              <p>
                {book.status}
              </p>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
}