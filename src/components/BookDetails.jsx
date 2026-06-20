"use client";

import { useEffect, useState } from "react";
import ReviewSection from "./ReviewSection";
import LibrarianControls from "./LibrarianControls";

export default function BookDetails() {
  const [mounted, setMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    setMounted(true);

    const loggedIn =
      localStorage.getItem("isLoggedIn") === "true";

    const userRole =
      localStorage.getItem("role") || "";

    setIsLoggedIn(loggedIn);
    setRole(userRole);
  }, []);

  if (!mounted) return null;

  const book = {
  title: "Atomic Habits",
  author: "James Clear",
  image:
    "https://i.ibb.co/kVP0s8Rs/atomichabits-1600x800-update.jpg",
  description:
    "A practical guide to building good habits and breaking bad ones.",
  deliveryFee: 80,
  status: "Available",
};

const handleWishlist = () => {
  const wishlist =
    JSON.parse(
      localStorage.getItem("wishlist")
    ) || [];

  const exists = wishlist.find(
    (item) => item.title === book.title
  );

  if (exists) {
    alert("Book already in wishlist");
    return;
  }

  wishlist.push(book);

  localStorage.setItem(
    "wishlist",
    JSON.stringify(wishlist)
  );

  alert("Book added to wishlist");
};

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Book Image */}
        <div>
          <img
            src={book.image}
            alt={book.title}
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Book Details */}
        <div>
          <h1 className="text-4xl font-bold">
            {book.title}
          </h1>

          <p className="mt-3 text-lg">
            Author: {book.author}
          </p>

          <p className="mt-4 text-gray-600">
            {book.description}
          </p>

          <div className="mt-6 space-y-2">
            <p>
              Delivery Fee:
              <span className="font-bold text-orange-500">
                {" "}৳{book.deliveryFee}
              </span>
            </p>

            <p>
              Status:
              <span className="font-semibold text-green-600">
                {" "}{book.status}
              </span>
            </p>
          </div>

          {/* Login User Features */}
          {isLoggedIn && (
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="btn btn-success">
                Request Delivery
              </button>

             <button
              onClick={handleWishlist}
              className="btn btn-outline"
              >
              Add to Wishlist
              </button>
            </div>    
          )}

          {/* Librarian Only */}
          {isLoggedIn &&
            role === "librarian" && (
              <div className="mt-8">
                <LibrarianControls />
              </div>
            )}
        </div>
      </div>

      {/* Reviews Only For Logged In Users */}
      {isLoggedIn && (
        <div className="mt-10">
          <ReviewSection />
        </div>
      )}
    </div>
  );
}