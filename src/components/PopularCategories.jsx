import {
  BookOpen,
  Atom,
  GraduationCap,
  Heart,
  Search,
  User,
  ScrollText,
  Sparkles,
} from "lucide-react";

const categories = [
  {
    name: "Fiction Stories",
    books: "2.4k+ Titles",
    icon: BookOpen,
  },
  {
    name: "Science & Future",
    books: "1.8k+ Titles",
    icon: Atom,
  },
  {
    name: "Academic Resources",
    books: "3.1k+ Titles",
    icon: GraduationCap,
  },
  {
    name: "Romantic Reads",
    books: "2.2k+ Titles",
    icon: Heart,
  },
  {
    name: "Mystery Collection",
    books: "1.5k+ Titles",
    icon: Search,
  },
  {
    name: "Life Stories",
    books: "980+ Titles",
    icon: User,
  },
  {
    name: "Historical Archives",
    books: "1.2k+ Titles",
    icon: ScrollText,
  },
  {
    name: "Personal Growth",
    books: "1.7k+ Titles",
    icon: Sparkles,
  },
];

const PopularCategories = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Badge */}
        <div className="text-center">
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Popular Categories
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mt-5">
          Discover Your Next Favorite Book
        </h2>

        <p className="text-center text-gray-500 mt-3 max-w-2xl mx-auto">
          Browse collections across different genres and find books that match
          your interests and reading goals.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                key={index}
                className="bg-purple-50 rounded-xl p-5 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <Icon className="w-7 h-7 text-primary mb-3" />

                <h3 className="font-semibold text-gray-800">
                  {category.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {category.books}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;