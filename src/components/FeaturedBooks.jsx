"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function FeaturedBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/books/books.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.slice(0, 6));
      });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 mt-24 mb-20">

      {/* Section Header */}
      <div className="text-center mb-12">

        <span className="inline-block bg-indigo-100 text-indigo-600 text-sm font-semibold px-4 py-2 rounded-full">
          📚 Featured Collection
        </span>

        <h2 className="text-4xl font-bold text-gray-800 mt-4">
          Featured Books
        </h2>

        <p className="text-gray-500 mt-3 max-w-2xl mx-auto font-bold">
          Explore our featured collection of books, connecting readers with knowledge, inspiration, and stories that make a lasting impact.
        </p>

      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {books.map((book) => (

          <div
            key={book.id}
            className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >

            {/* Image Section */}
            <div className="relative bg-white h-72 flex items-center justify-center border-b">

              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full font-medium shadow">
                  {book.category}
                </span>
              </div>

              <Image
                src={book.image}
                alt={book.title}
                width={400}
                height={300}
                className="w-full h-full object-contain p-4"
/>

            </div>

            {/* Card Content */}
            <div className="p-5">

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Book Name: {book.title}
              </h3>

              <p className="text-gray-600 mb-4">
               Author: {book.author}
              </p>

              <div className="flex items-center justify-between">

                <span className="text-lg font-bold text-orange-500">
                  ${book.price}
                </span>

                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    book.status === "Available"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {book.status}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}