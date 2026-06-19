"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function RegisterForm() {
  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center p-5">

      <div className="card bg-base-100 shadow-xl w-full max-w-lg">

        <div className="card-body">

          <h2 className="text-3xl font-bold text-center ">
            Create Account
          </h2>

          <p className="text-center text-gray-700 font-bold">
          Experience BiblioDrop now
          </p>

          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered-rounded  w-full"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered w-full"
          />


          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
          />

          {/* Confirm Password */}
          <input
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered w-full"
          />

          <button className="btn btn-primary mt-3">
            Create Account
          </button>

          {/* Divider */}
          <div className="divider">
            OR
          </div>

          {/* Google Button (Below Form) */}
          <button className="btn btn-outline">

            <FcGoogle size={24} />

            Continue with Google

          </button>

          <p className="text-center mt-3">

            Already have an account?

            <Link
              href="/login"
              className="text-primary ml-2"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}