"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ManageAllBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/books/")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load books");
        setLoading(false);
      });
  }, []);

  const handleToggleStatus = async (id, currentStatus) => {
    const newStatus =
      currentStatus === "Unpublished" ? "Published" : "Unpublished";
    try {
      const res = await fetch(
        `http://localhost:5000/books/status/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: newStatus }),
        }
      );
      const data = await res.json();
      if (data.success) {
        toast.success(`Book ${newStatus.toLowerCase()}`);
        setBooks((prev) =>
          prev.map((b) =>
            b._id === id ? { ...b, status: newStatus } : b
          )
        );
      } else {
        toast.error("Failed to update status");
      }
    } catch {
      toast.error("Something went wrong");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this book permanently?")) return;
    try {
      const res = await fetch(`http://localhost:5000/books/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Book deleted");
        setBooks((prev) => prev.filter((b) => b._id !== id));
      } else {
        toast.error("Failed to delete book");
      }
    } catch {
      toast.error("Something went wrong");
    }
  };

  if (loading) {
    return (
      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">Manage All Books</h2>
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Manage All Books</h2>
      <p className="text-gray-500 mb-4">{books.length} books total</p>

      {books.length === 0 ? (
        <p className="text-gray-500">No books found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={book._id}>
                  <td>{index + 1}</td>
                  <td className="font-medium">{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.category}</td>
                  <td>${book.price}</td>
                  <td>
                    <span
                      className={`badge ${
                        book.status === "Published"
                          ? "badge-success"
                          : book.status === "Pending Approval"
                          ? "badge-warning"
                          : "badge-ghost"
                      }`}
                    >
                      {book.status}
                    </span>
                  </td>
                  <td className="space-x-2">
                    <button
                      onClick={() =>
                        handleToggleStatus(book._id, book.status)
                      }
                      className={`btn btn-sm ${
                        book.status === "Unpublished"
                          ? "btn-success"
                          : "btn-warning"
                      } text-white`}
                    >
                      {book.status === "Unpublished"
                        ? "Publish"
                        : "Unpublish"}
                    </button>
                    <button
                      onClick={() => handleDelete(book._id)}
                      className="btn btn-error btn-sm text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
