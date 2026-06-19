"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export default function RegisterForm() {
  const router = useRouter();


  const handleRegister = (e) => {
  e.preventDefault();

  const role = document.getElementById("role").value;

  if (role === "reader") {
    router.push("/");
  }

  if (role === "librarian") {
    router.push("/dashboard");
  }
};

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center p-5">
      <div className="card bg-base-100 shadow-xl w-full max-w-lg">
        <div className="card-body">
          {/* Title */}
          <h2 className="text-4xl font-bold text-center">
            Create Account
          </h2>

          <p className="text-center text-gray-500 mb-2">
            Experience BiblioDrop now
          </p>

          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="input input-bordered w-full"
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

          {/* Role Dropdown */}
          <select
            id="role"
              className="select select-bordered w-full h-14 text-base">
            <option value="">
              Select Your Role
            </option>

           <option value="reader">
            Reader
           </option>

          <option value="librarian">
            Librarian
          </option>
        </select>
        

          {/* Register Button */}
         <button
           onClick={handleRegister}
           className="btn btn-primary mt-3"> 
            Create Account
         </button>



          {/* Divider */}
          <div className="divider">
            OR
          </div>

          {/* Google Login */}
          <button className="btn btn-outline w-full">
            <FcGoogle size={24} />
            Continue with Google
          </button>

          {/* Login Link */}
          <p className="text-center mt-3">
            Already have an account?

            <Link
              href="/login"
              className="text-primary ml-2 font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}