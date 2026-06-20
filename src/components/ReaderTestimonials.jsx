const testimonials = [
  {
    id: 1,
    name: "Ayesha Rahman",
    role: "University Student",
    review:
      "The platform made finding academic and reference books incredibly easy. The delivery service was fast and reliable.",
    rating: "★★★★★",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 2,
    name: "Mahmud Hasan",
    role: "Research Assistant",
    review:
      "A well-organized collection with a smooth browsing experience. I found several resources for my research work.",
    rating: "★★★★★",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    role: "Book Enthusiast",
    review:
      "The category system and recommendations helped me discover books I would have never found otherwise.",
    rating: "★★★★★",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
];

const ReaderTestimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="text-center">
          <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">
            Reader Reviews
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mt-5 text-gray-800">
          What Our Readers Say
        </h2>

        <p className="text-center text-gray-500 mt-4 max-w-2xl mx-auto">
          Discover why readers trust BiblioDrop for finding books,
          exploring new genres, and enjoying a seamless reading experience.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-yellow-500 text-lg mb-4">
                {item.rating}
              </div>

              <p className="text-gray-600 leading-relaxed">
                {item.review}
              </p>

              <div className="flex items-center gap-4 mt-8">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-bold text-gray-800">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReaderTestimonials;