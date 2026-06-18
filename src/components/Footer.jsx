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
    <footer className="bg-gradient-to-r from-indigo-400 to-purple-400 text-white">

      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-b border-white/20">

        <div className="flex flex-col lg:flex-row gap-8 justify-between items-center">

          <div>
            <h2 className="text-3xl font-bold mb-2">
              Subscribe to Our Newsletter
            </h2>

            <p className="text-gray-300">
              Get the latest book recommendations, library updates,
              and delivery offers directly in your inbox.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

            <input
              type="email"
              placeholder="Enter your email address"
              className="input input-bordered w-full lg:w-96 bg-white/10 text-white border-white/20"
            />

            <button className="btn btn-tertiary rounded-xl px-8">
              Subscribe →
            </button>

          </div>

        </div>

      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo & Description */}
          <div>

            <Link
              href="/"
              className="flex items-center gap-3 mb-5"
            >
              <Image
                src="/images/logo.png"
                alt="BiblioDrop"
                width={45}
                height={45}
              />

             <span className="tracking-tight text-xl font-black text-slate-800">
            <span className="text-indigo-600 ">Biblio</span>
            <span className="text-amber-500 ml-0.5">Drop</span>
          </span>
            </Link>

            <p className="text-gray-300 leading-relaxed">
              Connecting readers with libraries through a modern
              book delivery platform. Discover, request, and enjoy
              books delivered to your doorstep.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">

              <a className="btn btn-circle btn-sm btn-outline">
                <FaFacebookF />
              </a>

              <a className="btn btn-circle btn-sm btn-outline">
                <FaXTwitter />
              </a>

              <a className="btn btn-circle btn-sm btn-outline">
                <FaInstagram />
              </a>

              <a className="btn btn-circle btn-sm btn-outline">
                <FaLinkedinIn />
              </a>

              <a className="btn btn-circle btn-sm btn-outline">
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="footer-title text-lg">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/browse-books">
                  Browse Books
                </Link>
              </li>

              <li>
                <Link href="/how-it-works">
                  How It Works
                </Link>
              </li>

              <li>
                <Link href="/about">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Legal */}
          <div>

            <h3 className="footer-title text-lg">
              Legal
            </h3>

            <ul className="space-y-3">

              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Refund Policy</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="footer-title text-lg">
              Contact Us
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>
                📍 Dhaka, Bangladesh
              </li>

              <li>
                📞 +880 1700-000000
              </li>

              <li>
                ✉️ support@bibliodrop.com
              </li>

            </ul>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center">

          <p className="text-sm text-gray-300">
            © 2026 BiblioDrop. All Rights Reserved.
          </p>

          <p className="text-sm text-gray-400">
            Online Book Delivery Management System
          </p>

        </div>

      </div>

    </footer>
  );
}