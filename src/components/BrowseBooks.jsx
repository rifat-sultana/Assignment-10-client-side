"use client";

import { useEffect, useState } from "react";
import BookCard from "./BookCard";

export default function BrowseBooks() {
  const [books, setBooks] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");

  const [showFilters, setShowFilters] = useState(false);

  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const params = new URLSearchParams({
      page: currentPage,
      limit: 6,
    });

    if (search) {
      params.append("search", search);
    }

    if (category) {
      params.append("category", category);
    }

    if (status) {
      params.append("status", status);
    }

    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/books?${params.toString()}`
    )
      .then((res) => res.json())
      .then((data) => {

  let result = [...(data.books || [])];

  if (minPrice !== "") {
    result = result.filter(
      (book) => book.price >= Number(minPrice)
    );
  }

  if (maxPrice !== "") {
    result = result.filter(
      (book) => book.price <= Number(maxPrice)
    );
  }

  if (sort === "newest") {
    result.sort((a, b) => b.id - a.id);
  }

  if (sort === "oldest") {
    result.sort((a, b) => a.id - b.id);
  }

  if (sort === "low-high") {
    result.sort((a, b) => a.price - b.price);
  }

  if (sort === "high-low") {
    result.sort((a, b) => b.price - a.price);
  }

  console.log("API Response:", data);
  console.log("Result:", result);
  console.log("Books Length:", result.length);

  setBooks(result);
  setTotalPages(data.totalPages || 1);

})
      .catch(console.error);
  }, [
    currentPage,
    search,
    category,
    status,
    sort,
    minPrice,
    maxPrice,
  ]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          Browse Books
        </h1>

        <p className="text-gray-500 mt-2">
          Explore our collection of books.
        </p>

      </div>
            <div className="bg-white rounded-2xl shadow-md p-5 mb-6">

        <div className="grid md:grid-cols-3 gap-4">

          <input
            type="text"
            placeholder="Search books..."
            className="input input-bordered w-full"
            value={search}
            onChange={(e) => {
              setCurrentPage(1);
              setSearch(e.target.value);
            }}
          />

          <select
            className="select select-bordered w-full"
            value={sort}
            onChange={(e) =>
              setSort(e.target.value)
            }
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

          <button
            className="btn btn-primary"
            onClick={() =>
              setShowFilters(!showFilters)
            }
          >
            Filters
          </button>

        </div>

      </div>

      {showFilters && (

        <div className="bg-white rounded-2xl shadow-md p-5 mb-8">

          <div className="grid md:grid-cols-4 gap-4">

            <select
              className="select select-bordered"
              value={category}
              onChange={(e) => {
                setCurrentPage(1);
                setCategory(e.target.value);
              }}
            >
              <option value="">
                All Categories
              </option>

              <option value="Programming">
                Programming
              </option>

              <option value="Business">
                Business
              </option>

              <option value="Finance">
                Finance
              </option>

              <option value="Academic">
                Academic
              </option>

              <option value="History">
                History
              </option>

            </select>

            <input
              type="number"
              placeholder="Min Price"
              className="input input-bordered"
              value={minPrice}
              onChange={(e) =>
                setMinPrice(e.target.value)
              }
            />

            <input
              type="number"
              placeholder="Max Price"
              className="input input-bordered"
              value={maxPrice}
              onChange={(e) =>
                setMaxPrice(e.target.value)
              }
            />

            <select
              className="select select-bordered"
              value={status}
              onChange={(e) => {
                setCurrentPage(1);
                setStatus(e.target.value);
              }}
            >
              <option value="">
                All Status
              </option>

              <option value="Published">
                Published
              </option>

              <option value="Unpublished">
                Unpublished
              </option>

            </select>

          </div>

        </div>

      )}

   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

  {books.length > 0 ? (
    books.map((book) => (
      <BookCard
        key={book._id}
        book={book}
      />
    ))
  ) : (
    <div className="col-span-full text-center py-10">
      <h2 className="text-2xl font-bold">
        No Books Found
      </h2>

      <p className="text-gray-500 mt-2">
        Try changing your search or filters.
      </p>
    </div>
  )}

</div>

      {/* Pagination */}

      <div className="flex justify-center items-center gap-3 mt-10">

        <button
          className="btn"
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage((prev) => prev - 1)
          }
        >
          Previous
        </button>

        {Array.from(
          { length: totalPages },
          (_, index) => (
            <button
              key={index}
              onClick={() =>
                setCurrentPage(index + 1)
              }
              className={`btn ${
                currentPage === index + 1
                  ? "btn-primary"
                  : "btn-outline"
              }`}
            >
              {index + 1}
            </button>
          )
        )}

        <button
          className="btn"
          disabled={
            currentPage === totalPages
          }
          onClick={() =>
            setCurrentPage((prev) => prev + 1)
          }
        >
          Next
        </button>

      </div>

    </section>
  );
}