export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Browse Books",
      description:
        "Browse thousands of books by title, author, or category.",
      icon: "📚",
    },
    {
      number: "02",
      title: "Login or Register",
      description:
        "Create your account and login securely.",
      icon: "👤",
    },
    {
      number: "03",
      title: "Borrow Request",
      description:
        "Request your desired book from the library.",
      icon: "📝",
    },
    {
      number: "04",
      title: "Librarian Approval",
      description:
        "The librarian reviews and approves your request.",
      icon: "✅",
    },
    {
      number: "05",
      title: "Book Delivery",
      description:
        "Receive the book quickly through our delivery service.",
      icon: "🚚",
    },
    {
      number: "06",
      title: "Read & Return",
      description:
        "Enjoy reading and return the book before the due date.",
      icon: "📖",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <h1 className="text-5xl font-bold">
          How BiblioDrop Works
        </h1>

        <p className="mt-4 text-gray-500">
          Borrow books in six easy steps.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl duration-300"
          >
            <div className="text-5xl">
              {step.icon}
            </div>

            <p className="text-indigo-600 font-bold mt-4">
              Step {step.number}
            </p>

            <h2 className="text-2xl font-bold mt-2">
              {step.title}
            </h2>

            <p className="mt-3 text-gray-500">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}