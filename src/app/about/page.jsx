
export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold">
          About BiblioDrop
        </h1>

        <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
          BiblioDrop is an Online Book Delivery Management System
          designed to make borrowing books simple, fast, and
          convenient for students and readers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Our Mission
          </h2>

          <p className="text-gray-600 leading-8">
            Our mission is to provide an easy and efficient
            platform where readers can browse books,
            request borrowing, and receive books through
            a smooth delivery process.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Our Vision
          </h2>

          <p className="text-gray-600 leading-8">
            We aim to build a modern digital library
            system that encourages reading habits
            and provides quick access to books
            anytime and anywhere.
          </p>
        </div>

      </div>

      <div className="mt-20">

        <h2 className="text-4xl font-bold text-center mb-10">
          Why Choose BiblioDrop?
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-indigo-50 rounded-xl p-6 text-center">
            <div className="text-5xl">📚</div>
            <h3 className="font-bold mt-4">
              Huge Collection
            </h3>
          </div>

          <div className="bg-indigo-50 rounded-xl p-6 text-center">
            <div className="text-5xl">🚚</div>
            <h3 className="font-bold mt-4">
              Fast Delivery
            </h3>
          </div>

          <div className="bg-indigo-50 rounded-xl p-6 text-center">
            <div className="text-5xl">🔒</div>
            <h3 className="font-bold mt-4">
              Secure Login
            </h3>
          </div>

          <div className="bg-indigo-50 rounded-xl p-6 text-center">
            <div className="text-5xl">⭐</div>
            <h3 className="font-bold mt-4">
              Easy Borrowing
            </h3>
          </div>

        </div>

      </div>

    </div>
  );
}