"use client";

import { useEffect, useState } from "react";

export default function ManageInventory() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    author: "",
    category: "",
    fee: "",
    description: "",
  });

  const librarianEmail = typeof window !== "undefined" ? localStorage.getItem("email") || "" : "";

  const loadBooks = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/books?librarianEmail=${encodeURIComponent(librarianEmail)}`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.books || []);
      });
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const deleteBook = async (id) => {
    const confirmDelete = confirm("Delete this book?");
    if (!confirmDelete) return;

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books/${id}`, {
      method: "DELETE",
    });

    loadBooks();
  };

  const openEditModal = (book) => {
    setEditingBook(book);
    setEditForm({
      title: book.title || "",
      author: book.author || "",
      category: book.category || "",
      price: book.price || "",
      fee: book.fee || "",
      description: book.description || "",
    });
  };

  const closeEditModal = () => {
    setEditingBook(null);
    setEditForm({ title: "", author: "", category: "", price: "", fee: "", description: "" });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const saveEdit = async () => {
    if (!editingBook) return;

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books/${editingBook._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: editForm.title,
        author: editForm.author,
        category: editForm.category,
        price: Number(editForm.price),
        fee: Number(editForm.fee),
        description: editForm.description,
      }),
    });

    setBooks((prev) =>
      prev.map((book) =>
        book._id === editingBook._id
          ? {
              ...book,
              title: editForm.title,
              author: editForm.author,
              category: editForm.category,
              price: Number(editForm.price),
              fee: Number(editForm.fee),
              description: editForm.description,
            }
          : book
      )
    );

    closeEditModal();
  };

  const changeStatus = async (id, status) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books/status/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    });

    setBooks((prev) =>
      prev.map((book) =>
        book._id === id ? { ...book, status } : book
      )
    );
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Inventory</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Fee</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book, index) => (
              <tr key={book._id}>
                <td>{index + 1}</td>
                <td>{book.title}</td>
                <td>{book.category}</td>
                <td>${book.price}</td>
                <td>${book.fee}</td>
                <td>
                  <span
                    className={`badge ${
                      book.status === "Published"
                        ? "badge-success"
                        : book.status === "Unpublished"
                        ? "badge-error"
                        : "badge-warning"
                    }`}
                  >
                    {book.status}
                  </span>
                </td>
                <td className="space-x-2">
                  {book.status === "Published" && (
                    <button
                      onClick={() => changeStatus(book._id, "Unpublished")}
                      className="btn btn-warning btn-xs"
                    >
                      Unpublish
                    </button>
                  )}

                  {book.status === "Unpublished" && (
                    <button
                      onClick={() => changeStatus(book._id, "Published")}
                      className="btn btn-success btn-xs"
                    >
                      Publish
                    </button>
                  )}

                  <button
                    onClick={() => openEditModal(book)}
                    className="btn btn-info btn-xs"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteBook(book._id)}
                    className="btn btn-error btn-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingBook && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Edit Book</h3>

            <div className="space-y-3">
              <input
                name="title"
                value={editForm.title}
                onChange={handleEditChange}
                placeholder="Title"
                className="input input-bordered w-full"
              />

              <input
                name="author"
                value={editForm.author}
                onChange={handleEditChange}
                placeholder="Author"
                className="input input-bordered w-full"
              />

              <input
                name="category"
                value={editForm.category}
                onChange={handleEditChange}
                placeholder="Category"
                className="input input-bordered w-full"
              />

              <input
                name="price"
                type="number"
                step="0.01"
                value={editForm.price}
                onChange={handleEditChange}
                placeholder="Book Price"
                className="input input-bordered w-full"
              />

              <input
                name="fee"
                type="number"
                step="0.01"
                value={editForm.fee}
                onChange={handleEditChange}
                placeholder="Delivery Fee"
                className="input input-bordered w-full"
              />

              <textarea
                name="description"
                value={editForm.description}
                onChange={handleEditChange}
                placeholder="Description"
                className="textarea textarea-bordered w-full"
              />
            </div>

            <div className="modal-action">
              <button className="btn btn-ghost" onClick={closeEditModal}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={saveEdit}>
                Save Changes
              </button>
            </div>
          </div>

          <form method="dialog" className="modal-backdrop" onClick={closeEditModal}>
            <button>close</button>
          </form>
        </dialog>
      )}
    </div>
  );
}
