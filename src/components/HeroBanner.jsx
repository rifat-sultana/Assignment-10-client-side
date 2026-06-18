"use client";

import Image from "next/image";

const slides = [
  // {
  //   id: 1,
  //   image: "/images/banner image-1.jpg",
  //   title: "Online Book Delivery Management System",
  //   tagline:
  //     "Discover thousands of books and get them delivered right to your doorstep.",
  // },

  {
    id: 2,
    image: "/images/banner image-2.jpg",
    title: "Read More, Travel Less",
    tagline:
      "Browse your favorite books online and enjoy hassle-free delivery.",
  },
  {
    id: 3,
    image: "/images/banner image-3.jpg",
    title: "Support Local Libraries",
    tagline:
      "Every delivery helps local libraries and independent book providers thrive.",
  },
  {
    id: 4,
    image: "/images/banner image-4.jpg",
    title: "Books Delivered Fast",
    tagline:
      "Request books instantly and receive them at your preferred location.",
  },
  {
    id: 5,
    image: "/images/banner image-5.jpg",
    title: "A Library In Your Pocket",
    tagline:
      "Explore categories, discover authors, and manage your reading journey.",
  },
  {
    id: 6,
    image: "/images/banner image-6.jpg",
    title: "Knowledge At Your Doorstep",
    tagline:
      "Connecting readers with books through a modern online delivery platform.",
  },
];

export default function HeroBanner() {
  return (
    <div className="carousel w-full h-[650px]">
      {slides.map((slide) => (
        <div
          key={slide.id}
          id={`slide${slide.id}`}
          className="carousel-item relative w-full"
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-6 max-w-4xl">
              
              {/* Badge */}
              <div className="badge badge-warning badge-lg mb-5">
                # Smart Library Delivery Platform
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {slide.title}
              </h1>

              {/* Tagline */}
              <p className="mt-6 text-lg md:text-xl">
                {slide.tagline}
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <button className="btn btn-warning rounded-full px-8">
                  Explore Now →
                </button>

                <button className="btn btn-outline rounded-full px-8 text-white border-white hover:bg-white hover:text-black">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Left Arrow */}
          <a
            href={`#slide${slide.id === 1 ? slides.length : slide.id - 1}`}
            className="btn btn-circle absolute left-5 top-1/2 -translate-y-1/2 bg-black/50 border-none text-white hover:bg-black/80"
          >
            ❮
          </a>

          {/* Right Arrow */}
          <a
            href={`#slide${slide.id === slides.length ? 1 : slide.id + 1}`}
            className="btn btn-circle absolute right-5 top-1/2 -translate-y-1/2 bg-black/50 border-none text-white hover:bg-black/80"
          >
            ❯
          </a>
        </div>
      ))}
    </div>
  );
}