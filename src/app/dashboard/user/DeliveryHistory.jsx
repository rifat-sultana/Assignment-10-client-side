"use client";

import { useEffect, useState } from "react";

export default function DeliveryHistory() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const email =
      localStorage.getItem("email");

    fetch(
      `http://localhost:5000/readinglist/${email}`
    )
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-white p-5 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-4">
        Delivery History
      </h2>

      <table className="table">
        <thead>
          <tr>
            <th>Book</th>
            <th>Fee</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>
                ৳{book.deliveryFee}
              </td>
              <td>{book.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}