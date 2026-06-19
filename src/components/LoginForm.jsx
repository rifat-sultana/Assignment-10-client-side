"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function LoginForm() {
  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center p-5">

      <div className="card bg-base-100 shadow-xl w-full max-w-lg">

        <div className="card-body">

          <h2 className="text-3xl font-bold text-center">
            Welcome Back
          </h2>

          <p className="text-center text-gray-500">
            Login to your account
          </p>

          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered w-full"
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
          />

          <button className="btn btn-primary mt-3">
            Login
          </button>

          <div className="divider">
            OR
          </div>

          <button className="btn btn-outline">
            <FcGoogle size={24} />
            Continue with Google
          </button>

          <p className="text-center mt-3">

            Don't have an account?

            <Link
              href="/register"
              className="text-primary ml-2"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}