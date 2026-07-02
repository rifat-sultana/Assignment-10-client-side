"use client";

import { useState } from "react";

export default function AddBook() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    const title = form.title.value;
    const author = form.author.value;
    const category = form.category.value;
    const price = Number(form.price.value);
    const fee = Number(form.fee.value);
    const description = form.description.value;
    const image = form.image.files[0];

    try {
      const formData = new FormData();
      formData.append("image", image);

      const imageRes = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const imageData = await imageRes.json();
      const imageUrl = imageData.data.url;

      const librarianEmail = localStorage.getItem("email") || "";

      const book = {
        title,
        author,
        category,
        price,
        fee,
        description,
        image: imageUrl,
        status: "Pending Approval",
        librarianEmail,
      };

      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/books`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });

      alert("Book Added Successfully");
      form.reset();
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Add Book</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Book Title"
          className="input input-bordered w-full"
          required
        />

        <input
          name="author"
          placeholder="Author"
          className="input input-bordered w-full"
          required
        />

        <input
          name="category"
          placeholder="Category"
          className="input input-bordered w-full"
          required
        />

        <input
          name="price"
          type="number"
          step="0.01"
          placeholder="Book Price"
          className="input input-bordered w-full"
          required
        />

        <input
          name="fee"
          type="number"
          step="0.01"
          placeholder="Delivery Fee"
          className="input input-bordered w-full"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered w-full"
          required
        />

        <input
          name="image"
          type="file"
          className="file-input file-input-bordered w-full"
          required
        />

        <button className="btn btn-primary" disabled={loading}>
          {loading ? "Uploading..." : "Add Book"}
        </button>
      </form>
    </div>
  );
}
