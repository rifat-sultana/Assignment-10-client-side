"use client";

import { useEffect, useState } from "react";
import BookCard from "./BookCard";

export default function BrowseBooks() {
  const [books, setBooks] = useState([]);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");

  const [showFilters, setShowFilters] = useState(false);

  const [category, setCategory] = useState("");
  const [availability, setAvailability] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
  fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/books`
  )
    .then((res) => res.json())
    .then((data) => setBooks(data))
    .catch((err) =>
      console.error(err)
    );
}, []);

  let filteredBooks = books.filter((book) => {
    const searchMatch = book.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "" || book.category === category;

    const availabilityMatch =
      availability === "" ||
      book.status === availability;

    const minMatch =
      minPrice === "" ||
      book.price >= Number(minPrice);

    const maxMatch =
      maxPrice === "" ||
      book.price <= Number(maxPrice);

    return (
      searchMatch &&
      categoryMatch &&
      availabilityMatch &&
      minMatch &&
      maxMatch
    );
  });

  if (sort === "newest") {
    filteredBooks.sort((a, b) => b.id - a.id);
  }

  if (sort === "oldest") {
    filteredBooks.sort((a, b) => a.id - b.id);
  }

  if (sort === "low-high") {
    filteredBooks.sort((a, b) => a.price - b.price);
  }

  if (sort === "high-low") {
    filteredBooks.sort((a, b) => b.price - a.price);
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      {/* Header */}
      <div className="mb-8">
        <h1 className="inline-block text-4xl font-bold text-gray-800">
          Browse Books
        </h1>

        <p className="text-gray-500 mt-2">
          Explore our collection of books from local libraries and independent providers.
        </p>
      </div>

      {/* Search + Sort */}
      <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-5 mb-6">
        <div className="grid md:grid-cols-3 gap-4">

          {/* Search */}
          <input
            type="text"
            placeholder="Search books..."
            className="input input-bordered w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Sort */}
          <select
            className="select select-bordered w-full"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="newest">
              Newest First
            </option>

            <option value="oldest">
              Oldest First
            </option>

            <option value="low-high">
              Price: Low → High
            </option>

            <option value="high-low">
              Price: High → Low
            </option>
          </select>

          {/* Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="btn bg-indigo-600 hover:bg-indigo-700 text-white border-none w-full"
          >
            Filters
          </button>

        </div>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-5 mb-8">

          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">
              Filter Options
            </h3>

            <button
              onClick={() => {
                setCategory("");
                setAvailability("");
                setMinPrice("");
                setMaxPrice("");
              }}
              className="text-sm text-indigo-600 font-medium"
            >
              Clear All
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-4">

            {/* Category */}
            <select
              className="select select-bordered w-full"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">
                All Categories
              </option>

              <option value="Programming">
                Programming
              </option>

              <option value="Self Help">
                Self Help
              </option>

              <option value="Business">
                Business
              </option>

              <option value="Finance">
                Finance
              </option>

              <option value="History">
                History
              </option>

              <option value="Mystery">
                Mystery
              </option>

              <option value="Academic">
                Academic
              </option>

              <option value="Productivity">
                Productivity
              </option>
            </select>

            {/* Min Price */}
            <input
              type="number"
              placeholder="Min Price"
              className="input input-bordered"
              value={minPrice}
              onChange={(e) =>
                setMinPrice(e.target.value)
              }
            />

            {/* Max Price */}
            <input
              type="number"
              placeholder="Max Price"
              className="input input-bordered"
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(e.target.value)
              }
            />

            {/* Availability */}
            <select
              className="select select-bordered w-full"
              value={availability}
              onChange={(e) =>
                setAvailability(e.target.value)
              }
            >
              <option value="">
                All
              </option>

              <option value="Available">
                Available
              </option>

              <option value="Not Available">
                Not Available
              </option>
            </select>

          </div>
        </div>
      )}

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <BookCard
              key={book.id}
              book={book}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-10">

            <h3 className="text-xl font-semibold text-gray-600">
              No Books Found
            </h3>

            <p className="text-gray-500 mt-2">
              Try changing your search or filters.
            </p>

          </div>
        )}

      </div>

    </section>
  );
}