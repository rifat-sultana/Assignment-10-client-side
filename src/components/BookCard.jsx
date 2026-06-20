import Image from "next/image";
import Link from "next/link";

export default function BookCard({ book }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      
      <div className="relative h-64 w-full">
        <Image
          src={book.image}
          alt={book.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">

        <span className="inline-block px-3 py-1 text-xs font-bold text-black bg-red-400 rounded-full mb-3">
          {book.category}
        </span>

        <h3 className="font-bold text-lg text-gray-800">
          {book.title}
        </h3>

        <p className="text-sm text-gray-600 mt-1">
          By {book.author}
        </p>

        <div className="flex justify-between items-center mt-4">

          <p className="font-bold text-orange-500">
            ${book.price}
          </p>

          <span
            className={`text-xs px-3 py-1 rounded-full font-medium ${
              book.status === "Available"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {book.status}
          </span>
        </div>

          <Link href={`/books/${book.id}`}>
              <button className="btn btn-primary w-full mt-4">
                View Details
              </button>
            </Link>
      </div>
    </div>
  );
}