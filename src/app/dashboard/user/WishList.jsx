"use client";

import { useEffect, useState } from "react";

export default function WishList() {
const [wishlist, setWishlist] =
useState([]);

const [loading, setLoading] =
useState(true);

useEffect(() => {
const email =
localStorage.getItem("email");


fetch(
  `http://localhost:5000/wishlist/${email}`
)
  .then((res) => res.json())
  .then((data) => {
    setWishlist(data);
    setLoading(false);
  })
  .catch((error) => {
    console.error(error);
    setLoading(false);
  });


}, []);

if (loading) {
return ( <div className="bg-white p-5 rounded-xl shadow"> <h2 className="text-2xl font-bold mb-4">
Wishlist </h2>


    <p>Loading...</p>
  </div>
);


}

return ( <div className="bg-white p-5 rounded-xl shadow">

  <h2 className="text-2xl font-bold mb-4">
    Wishlist
  </h2>

  {wishlist.length === 0 ? (
    <p>
      No books in wishlist yet.
    </p>
  ) : (
    <div className="space-y-4">

      {wishlist.map((book) => (
        <div
          key={book._id}
          className="border p-4 rounded-lg"
        >
          <h3 className="font-bold text-lg">
            {book.title}
          </h3>

          <p className="text-gray-500">
            Book ID: {book.bookId}
          </p>
        </div>
      ))}

    </div>
  )}

</div>

);
}
