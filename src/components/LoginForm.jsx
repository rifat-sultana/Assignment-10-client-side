"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

export default function LoginForm() {

const handleLogin = async () => {
  const email =
    document
      .getElementById("email")
      .value
      .trim();

  const password =
    document
      .getElementById("password")
      .value;

  try {
    const response =
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

    const data =
      await response.json();

    if (!data.success) {
      toast.error(
        data.message
      );
      return;
    }

    localStorage.setItem(
      "token",
      data.token
    );

    localStorage.setItem(
      "isLoggedIn",
        "true"
);

    localStorage.setItem(
      "role",
      data.user.role
    );

    localStorage.setItem(
      "email",
      data.user.email
    );

    localStorage.setItem(
      "name",
      data.user.name
    );

    toast.success(
      "Login Successful"
    );

    setTimeout(() => {
      if (
        data.user.role ===
        "admin"
      ) {
        window.location.href =
          "/dashboard/admin";
      } else if (
        data.user.role ===
        "librarian"
      ) {
        window.location.href =
          "/dashboard/librarian";
      } else {
        window.location.href =
          "/dashboard/user";
      }
    }, 1000);
  } catch (error) {
    console.log(error);

    toast.error(
      "Login Failed"
    );
  }
};

return ( <div className="min-h-screen bg-base-200 flex justify-center items-center p-5">


  <div className="card bg-base-100 shadow-xl w-full max-w-lg">

    <div className="card-body">

      <h2 className="text-3xl font-bold text-center">
        Welcome Back
      </h2>

      <p className="text-center text-gray-500">
        Login to your account
      </p>

      <input
        id="email"
        type="email"
        placeholder="Email Address"
        className="input input-bordered w-full"
      />

      <input
        id="password"
        type="password"
        placeholder="Password"
        className="input input-bordered w-full"
      />

      <button
        onClick={handleLogin}
        className="btn btn-primary"
      >
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
