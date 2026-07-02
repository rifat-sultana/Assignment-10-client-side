"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function BookApprovalQueue() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/books?status=Pending%20Approval&limit=100`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.books || []);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load books");
        setLoading(false);
      });
  }, []);

  const handleApprove = async (id) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/books/status/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "Published" }),
        }
      );
      const data = await res.json();
      if (data.success) {
        toast.success("Book published successfully");
        setBooks((prev) => prev.filter((book) => book._id !== id));
      } else {
        toast.error("Failed to publish book");
      }
    } catch {
      toast.error("Something went wrong");
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this book?")) return;
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/books/${id}`,
        { method: "DELETE" }
      );
      const data = await res.json();
      if (data.success) {
        toast.success("Book deleted successfully");
        setBooks((prev) => prev.filter((book) => book._id !== id));
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
        <h2 className="text-2xl font-bold mb-4">Book Approval Queue</h2>
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">Book Approval Queue</h2>

      {books.length === 0 ? (
        <p className="text-gray-500">No books pending approval.</p>
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
                  <td className="space-x-2">
                    <button
                      onClick={() => handleApprove(book._id)}
                      className="btn btn-success btn-sm text-white"
                    >
                      Approve & Publish
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
