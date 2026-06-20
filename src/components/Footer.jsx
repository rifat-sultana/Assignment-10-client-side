import Image from "next/image";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-800 via-indigo-800 to-violet-800 text-white">

      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6 py-8 border-b border-white/10">

        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">

          <div>
            <h2 className="text-2xl font-bold mb-2">
              Subscribe to Our Newsletter
            </h2>

            <p className="text-slate-200 text-sm max-w-xl">
              Get the latest book recommendations, library updates,
              and delivery offers directly in your inbox.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

            <input
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full lg:w-80 bg-white/10 text-white border-white/20 placeholder:text-slate-300"
            />

            <button className="btn bg-white text-indigo-700 hover:bg-slate-100 border-0 rounded-xl px-8">
              Subscribe →
            </button>

          </div>

        </div>

      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo & Description */}
          <div>

            <Link
              href="/"
              className="flex items-center gap-3 mb-4"
            >
              <Image
                src="/images/logo.png"
                alt="BiblioDrop"
                width={40}
                height={40}
              />

              <span className="tracking-tight text-xl font-black">
                <span className="text-white">Biblio</span>
                <span className="text-amber-300 ml-0.5">Drop</span>
              </span>
            </Link>

            <p className="text-slate-200 leading-relaxed text-sm">
              Connecting readers with libraries through a modern
              book delivery platform. Discover and enjoy books
              delivered to your doorstep.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-5">

              <a className="btn btn-circle btn-sm bg-white/10 border-white/20 text-white hover:bg-white hover:text-indigo-700">
                <FaFacebookF />
              </a>

              <a className="btn btn-circle btn-sm bg-white/10 border-white/20 text-white hover:bg-white hover:text-indigo-700">
                <FaXTwitter />
              </a>

              <a className="btn btn-circle btn-sm bg-white/10 border-white/20 text-white hover:bg-white hover:text-indigo-700">
                <FaInstagram />
              </a>

              <a className="btn btn-circle btn-sm bg-white/10 border-white/20 text-white hover:bg-white hover:text-indigo-700">
                <FaLinkedinIn />
              </a>

              <a className="btn btn-circle btn-sm bg-white/10 border-white/20 text-white hover:bg-white hover:text-indigo-700">
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="font-bold text-lg mb-4 text-white">
              Quick Links
            </h3>

            <ul className="space-y-2 text-slate-200">

              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/browse-books"
                  className="hover:text-white"
                >
                  Browse Books
                </Link>
              </li>

              <li>
                <Link
                  href="/how-it-works"
                  className="hover:text-white"
                >
                  How It Works
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-white"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-white"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Legal */}
          <div>

            <h3 className="font-bold text-lg mb-4 text-white">
              Legal
            </h3>

            <ul className="space-y-2 text-slate-200">

              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Refund Policy</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="font-bold text-lg mb-4 text-white">
              Contact Us
            </h3>

            <ul className="space-y-2 text-slate-200">

              <li>📍 Dhaka, Bangladesh</li>

              <li>📞 +880 1700-000000</li>

              <li>✉️ support@bibliodrop.com</li>

            </ul>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2">

          <p className="text-sm text-slate-300">
            © 2026 BiblioDrop. All Rights Reserved.
          </p>

          <p className="text-sm text-slate-400">
            Online Book Delivery Management System
          </p>

        </div>

      </div>

    </footer>
  );
}