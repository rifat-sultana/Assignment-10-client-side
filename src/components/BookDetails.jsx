"use client";

import { useEffect, useState } from "react";
import ReviewSection from "./ReviewSection";
import LibrarianControls from "./LibrarianControls";

export default function BookDetails({ bookId }) {
const [book, setBook] = useState(null);
const [isLoggedIn, setIsLoggedIn] =
useState(false);

const [role, setRole] =
useState("");

useEffect(() => {
const loggedIn =
localStorage.getItem(
"isLoggedIn"
) === "true";


const userRole =
  localStorage.getItem("role") ||
  "";

setIsLoggedIn(loggedIn);
setRole(userRole);

fetch(
  `http://localhost:5000/books/${bookId}`
)
  .then((res) => res.json())
  .then((data) => {
    setBook(data);
  })
  .catch((err) =>
    console.error(err)
  );


}, [bookId]);

const handleWishlist =
async () => {
try {
const email =
localStorage.getItem(
"email"
);


    if (!email) {
      alert(
        "Please login first"
      );
      return;
    }

    const response =
      await fetch(
        "http://localhost:5000/wishlist",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            bookId: book.id,
            title: book.title,
            userEmail: email,
          }),
        }
      );

    const data =
      await response.json();

    if (response.ok) {
      alert(
        "Book added to wishlist successfully"
      );
    } else {
      alert(
        data.message ||
          "Failed to add wishlist"
      );
    }
  } catch (error) {
    console.error(error);

    alert(
      "Something went wrong"
    );
  }
};


const handleDeliveryRequest =
async () => {
try {
const email =
localStorage.getItem(
"email"
);


    if (!email) {
      alert(
        "Please login first"
      );
      return;
    }

    const response =
      await fetch(
        `http://localhost:5000/books/delivery/${book.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            userEmail: email,
          }),
        }
      );

    const data =
      await response.json();

    console.log(
      "Delivery Response:",
      data
    );

    if (data.success) {
      alert(
        "Delivery Request Successful"
      );

      setBook({
        ...book,
        deliveryStatus:
          "Pending Delivery",
      });
    } else {
      alert(
        data.message
      );
    }
  } catch (error) {
    console.error(error);
  }
};


if (!book) {
return ( <div className="text-center py-20">
Loading... </div>
);
}

const currentStatus =
book.deliveryStatus ||
book.status ||
"Available";

return ( <div className="max-w-6xl mx-auto px-6 py-10"> <div className="grid md:grid-cols-2 gap-10">


    <div>
      <img
        src={book.image}
        alt={book.title}
        className="w-full rounded-2xl shadow-lg"
      />
    </div>

    <div>

      <h1 className="text-4xl font-bold">
        {book.title}
      </h1>

      <p className="mt-3 text-lg">
        Author: {book.author}
      </p>

      {book.description && (
        <p className="mt-4 text-gray-600">
          {book.description}
        </p>
      )}

      <div className="mt-6 space-y-2">

        <p>
          Delivery Fee:
          <span className="font-bold text-orange-500">
            {" "}
            $
            {book.deliveryFee ||
              book.price}
          </span>
        </p>

        <p>
          Status:
          <span className="font-semibold text-green-600">
            {" "}
            {currentStatus}
          </span>
        </p>

      </div>

      <div className="flex flex-wrap gap-4 mt-8">

        {isLoggedIn ? (
          <button
            onClick={
              handleDeliveryRequest
            }
            className="btn btn-success"
          >
            Request Delivery
          </button>
        ) : (
          <button
            onClick={() => {
              localStorage.setItem(
                "redirectAfterLogin",
                `/books/${bookId}`
              );

              window.location.href =
                "/login";
            }}
            className="btn btn-primary"
          >
            Login to Request Delivery
          </button>
        )}

        <button
          onClick={
            handleWishlist
          }
          className="btn btn-outline"
        >
          Add to Wishlist
        </button>

      </div>

      {isLoggedIn &&
        role ===
          "librarian" && (
          <div className="mt-8">
            <LibrarianControls />
          </div>
        )}

    </div>
  </div>

  {isLoggedIn && (
    <div className="mt-10">
      <ReviewSection />
    </div>
  )}
</div>


);
}
