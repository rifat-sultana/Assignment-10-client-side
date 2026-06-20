"use client";

import { useEffect, useState } from "react";

export default function WishlistPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const wishlist =
      JSON.parse(
        localStorage.getItem("wishlist")
      ) || [];

    setBooks(wishlist);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        My Wishlist
      </h1>

      {books.length === 0 ? (
        <p>No books in wishlist.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {books.map((book, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow"
            >
              <figure>
                <img
                  src={book.image}
                  alt={book.title}
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">
                  {book.title}
                </h2>

                <p>{book.author}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}