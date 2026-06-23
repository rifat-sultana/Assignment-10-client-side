"use client";

import { useEffect, useState } from "react";

export default function ManageInventory() {
  const [books, setBooks] =
    useState([]);

  const loadBooks = () => {
    fetch("http://localhost:5000/books")
      .then((res) => res.json())
      .then((data) =>
        setBooks(data)
      );
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const deleteBook =
    async (id) => {
      const confirmDelete =
        confirm(
          "Delete this book?"
        );

const editBook = async (book) => {
  const title = prompt(
    "Enter new title",
    book.title
  );

  if (!title) return;

  await fetch(
    `http://localhost:5000/books/${book._id}`,
    {
      method: "PATCH",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify({
        title,
      }),
    }
  );

  loadBooks();
};

  const changeStatus = async (
  id,
  status
) => {
  await fetch(`http://localhost:5000/books/status/${id}`,
    {
      method: "PATCH",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify({
        status,
      }),
    }
  );

  loadBooks();
};      

      if (!confirmDelete)
        return;

      await fetch(
        `http://localhost:5000/books/${id}`,
        {
          method: "DELETE",
        }
      );

      loadBooks();
    };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Manage Inventory
      </h1>

      <div className="overflow-x-auto">

        <table className="table table-zebra">

          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Fee</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {books.map(
              (book) => (
                <tr
                  key={book._id}
                >
                  <td>
                    {book.title}
                  </td>

                  <td>
                    {book.category}
                  </td>

                  <td>
                    $
                    {book.price}
                  </td>

                  <td>
            <span
              className={`badge ${
              book.status ===
              "Published"
              ? "badge-success"
              : book.status ===
              "Unpublished"
              ? "badge-error"
              : "badge-warning"
              }`}
              >
            {book.status}
            </span>
              </td>

<td className="space-x-2">

  {book.status ===
    "Published" && (
    <button
      onClick={() =>
        changeStatus(
          book._id,
          "Unpublished"
        )
      }
      className="btn btn-warning btn-xs"
    >
      Unpublish
    </button>
  )}

  {book.status ===
    "Unpublished" && (
    <button
      onClick={() =>
        changeStatus(
          book._id,
          "Published"
        )
      }
      className="btn btn-success btn-xs"
    >
      Publish
    </button>
  )}

 <button
  onClick={() =>
    editBook(book)
  }
  className="btn btn-info btn-xs"
>
  Edit
</button>

  <button
    onClick={() =>
      deleteBook(book._id)
    }
    className="btn btn-error btn-xs"
  >
    Delete
  </button>

</td>
                </tr>
              )
            )}

          </tbody>

        </table>

      </div>
    </div>
  );
}