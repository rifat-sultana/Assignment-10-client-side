"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

export default function LoginForm() {
  const router = useRouter();

  const handleLogin = () => {
    const email =
      document.getElementById("email").value;

    const password =
      document.getElementById("password").value;

    const savedUser = JSON.parse(
      localStorage.getItem("user")
    );

    if (!savedUser) {
      toast.error(
        "No account found. Please register first."
      );
      return;
    }

    if (
      savedUser.email === email &&
      savedUser.password === password
    ) {
      localStorage.setItem(
        "isLoggedIn",
        "true"
      );

      localStorage.setItem(
        "role",
        savedUser.role || "user"
      );

      localStorage.setItem(
        "email",
        savedUser.email
      );

      toast.success("Login Successful");

      setTimeout(() => {
        router.push("/");
        router.refresh();
      }, 1000);
    } else {
      toast.error(
        "Invalid Email or Password"
      );
    }
  };

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