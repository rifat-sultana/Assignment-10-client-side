const librarians = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Senior Librarian",
    booksDelivered: 1240,
    rating: 4.9,
    experience: "8 Years",
    speciality: "Fiction & Mystery",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "James Rodriguez",
    role: "Book Distribution Manager",
    booksDelivered: 980,
    rating: 4.8,
    experience: "6 Years",
    speciality: "Academic Resources",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Digital Library Expert",
    booksDelivered: 856,
    rating: 4.9,
    experience: "5 Years",
    speciality: "Technology & Science",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const FeaturedLibrarians = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="text-center">
          <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-600 text-sm font-semibold">
            📚 Top Librarians
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mt-5 text-gray-800">
          Trusted Library Professionals
        </h2>

        <p className="text-center text-gray-700 mt-4 max-w-2xl mx-auto">
          Dedicated professionals helping readers discover books,
          manage collections, and ensure seamless delivery services.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {librarians.map((person) => (
            <div
              key={person.id}
              className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 p-8 text-center"
            >
              {/* Avatar */}
              <img
                src={person.image}
                alt={person.name}
                className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-indigo-100"
              />

              {/* Name */}
              <h3 className="text-xl font-bold text-gray-800 mt-5">
                {person.name}
              </h3>

              <p className="text-indigo-600 font-medium mt-1">
                {person.role}
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Speciality: {person.speciality}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">

                <div>
                  <h4 className="font-bold text-indigo-600">
                    {person.booksDelivered}
                  </h4>
                  <p className="text-xs text-gray-500">
                    Deliveries
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-orange-500">
                    ⭐ {person.rating}
                  </h4>
                  <p className="text-xs text-gray-500">
                    Rating
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-green-600">
                    {person.experience}
                  </h4>
                  <p className="text-xs text-gray-500">
                    Experience
                  </p>
                </div>

              </div>

              {/* Status */}
              <div className="mt-6">
                <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold">
                  Active Provider
                </span>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturedLibrarians;