export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold">
          Contact Us
        </h1>

        <p className="text-gray-500 mt-4">
          We'd love to hear from you. Feel free to contact us anytime.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* Contact Information */}

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-3xl font-bold mb-8">
            Get In Touch
          </h2>

          <div className="space-y-6">

            <div className="flex items-start gap-4">
              <div className="text-4xl">📍</div>

              <div>
                <h3 className="font-bold text-lg">
                  Address
                </h3>

                <p className="text-gray-500">
                  Institute of Information Technology,
                  University of Dhaka,
                  Dhaka-1000, Bangladesh
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-4xl">📞</div>

              <div>
                <h3 className="font-bold text-lg">
                  Phone
                </h3>

                <p className="text-gray-500">
                  +880 1700-000000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-4xl">📧</div>

              <div>
                <h3 className="font-bold text-lg">
                  Email
                </h3>

                <p className="text-gray-500">
                  support@bibliodrop.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-4xl">🕒</div>

              <div>
                <h3 className="font-bold text-lg">
                  Office Hours
                </h3>

                <p className="text-gray-500">
                  Sunday - Thursday
                  <br />
                  9:00 AM - 5:00 PM
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Contact Form */}

        <div className="bg-white rounded-2xl shadow-lg p-8">

          <h2 className="text-3xl font-bold mb-8">
            Send a Message
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
            />

            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered w-full"
            />

            <textarea
              rows={6}
              placeholder="Write your message..."
              className="textarea textarea-bordered w-full"
            ></textarea>

            <button
              className="btn btn-primary w-full"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}