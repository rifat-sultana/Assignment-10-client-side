"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

export default function RegisterForm() {
  const router = useRouter();

  const handleRegister = async () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const role = document.getElementById("role").value;

    if (!name || !email || !password || !confirmPassword || !role) {
      toast.error("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Registration Successful!");
        setTimeout(() => {
          router.push("/login");
        }, 1000);
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error("Server error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center p-5">
      <div className="card bg-base-100 shadow-xl w-full max-w-lg">
        <div className="card-body">
          <h2 className="text-4xl font-bold text-center">Create Account</h2>

          <p className="text-center text-gray-500 mb-2">
            Experience BiblioDrop now
          </p>

          <input
            id="name"
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full"
          />

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

          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered w-full"
          />

          <select
            id="role"
            className="select select-bordered w-full h-14 text-base"
          >
            <option value="">Select Your Role</option>

            <option value="reader">Reader</option>

            <option value="librarian">Librarian</option>
          </select>

          <button onClick={handleRegister} className="btn btn-primary mt-3">
            Create Account
          </button>

          <div className="divider">OR</div>

          <button className="btn btn-outline w-full">
            <FcGoogle size={24} />
            Continue with Google
          </button>

          <p className="text-center mt-3">
            Already have an account?
            <Link href="/login" className="text-primary ml-2 font-semibold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
