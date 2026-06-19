"use client";

import { useEffect, useState } from "react";

export default function BrowseBooks() {

  const [books, setBooks] = useState([]);

  useEffect(() => {

    fetch("/books/books.json")
      .then(res => res.json())
      .then(data => setBooks(data));

  }, []);

  return (

    <div className="max-w-7xl mx-auto py-10">

      <h1 className="text-4xl font-bold mb-10 text-center">
        Browse Books
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {books.map(book => (

          <div
            key={book.id}
            className="card bg-white shadow-md"
          >

            <figure>
              <image
                src={book.image}
                alt={book.title}
                className="h-64 w-full object-cover"
              />
            </figure>

            <div className="card-body">

              <div className="badge badge-primary">
                {book.category}
              </div>

              <h2 className="card-title">
                {book.title}
              </h2>

              <p>
                {book.author}
              </p>

              <div className="flex justify-between">

                <span className="font-bold text-orange-500">
                  ${book.price}
                </span>

                <span className="badge badge-success">
                  {book.status}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}