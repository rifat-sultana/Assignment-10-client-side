"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] =
    useState(false);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

 useEffect(() => {
  const token =
    localStorage.getItem("token");

  const userRole =
    localStorage.getItem("role");

  setIsLoggedIn(!!token);
  setRole(userRole || "");
  setName(localStorage.getItem("name") || "");
  setEmail(localStorage.getItem("email") || "");
}, []);

  const dashboardLink =
  role === "admin"
    ? "/dashboard/admin"
    : role === "librarian"
    ? "/dashboard/librarian"
    : "/dashboard/user";

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Browse Books",
      href: "/browse-books",
    },
    {
      name: "How It Works",
      href: "/how-it-works",
    },
    { name: "About", href: "/about" },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

const handleSignOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("role");
  localStorage.removeItem("email");
  localStorage.removeItem("name");

  window.location.href = "/";
};

  return (
    <div className="navbar bg-white sticky top-0 z-50 px-6 py-2 border-b border-gray-200 shadow-sm">

      {/* Logo */}
      <div className="navbar-start">
        <Link
          href="/"
          className="flex items-center gap-2.5"
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-indigo-50 border border-indigo-100 overflow-hidden">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={42}
              height={42}
              className="w-full h-full object-contain"
            />
          </div>

          <span className="tracking-tight text-xl font-black text-slate-800">
            <span className="text-indigo-600">
              Biblio
            </span>
            <span className="text-amber-500">
              Drop
            </span>
          </span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal bg-gray-100 p-1 rounded-full gap-1 border border-gray-200">

          {navLinks.map((link) => {
            const isActive =
              pathname === link.href;

            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`px-5 py-2 text-sm font-bold rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-white text-indigo-600 shadow-sm border border-gray-200"
                      : "text-slate-600 hover:text-indigo-600 hover:bg-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}

        </ul>
      </div>

      {/* Desktop Right */}
      <div className="navbar-end hidden md:flex items-center gap-3">

        <button className="btn btn-ghost btn-circle btn-sm border border-gray-200">
          🌙
        </button>

        {isLoggedIn ? (
          <div className="dropdown dropdown-end">

            <div
              tabIndex={0}
              role="button"
              className="btn btn-outline rounded-xl border-gray-200"
            >
              <FaUserCircle size={18} />

              <span>{name}</span>
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-white rounded-xl z-100 w-60 p-2 shadow-lg border border-gray-200 mt-2"
            >

              <li className="pointer-events-none">
                <div className="text-left px-2 py-1">
                  <p className="text-sm font-bold">{email}</p>
                  <p className="text-xs text-gray-500 capitalize">{role}</p>
                </div>
              </li>

              <div className="divider my-1"></div>

              <li>
                <Link
                  href={dashboardLink}
                >
                  Dashboard
                </Link>
              </li>

              <li>
                <button
                  onClick={
                    handleSignOut
                  }
                >
                  Sign Out
                </button>
              </li>

            </ul>
          </div>
        ) : (
          <>
            <Link
              href="/login"
              className="btn btn-outline btn-sm text-indigo-600 border-indigo-200 hover:bg-indigo-600 hover:text-white rounded-full px-5 font-semibold normal-case"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="btn btn-sm bg-indigo-600 hover:bg-indigo-700 text-white border-none rounded-full px-5 font-semibold normal-case"
            >
              Register
            </Link>
          </>
        )}
      </div>

      {/* Mobile */}
      <div className="navbar-end md:hidden flex items-center gap-2">

        <button className="btn btn-ghost btn-circle btn-sm border border-gray-200">
          🌙
        </button>

        <button
          onClick={() =>
            setIsOpen(!isOpen)
          }
          className="btn btn-square btn-ghost btn-sm"
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>

      {isOpen && (
        <div className="absolute top-16 left-4 right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-200 flex flex-col gap-2 md:hidden">

          <ul className="menu menu-vertical p-0 gap-1">

            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() =>
                    setIsOpen(false)
                  }
                >
                  {link.name}
                </Link>
              </li>
            ))}

          </ul>

          <div className="divider my-1"></div>

          {isLoggedIn ? (
            <div className="flex flex-col gap-2">

              <div className="text-center p-2 border-b">
                <p className="font-bold">{name}</p>
                <p className="text-sm text-gray-500">{email}</p>
                <p className="text-xs text-gray-400 capitalize">{role}</p>
              </div>

              <Link
                href={dashboardLink}
                className="btn btn-outline rounded-xl"
              >
                Dashboard
              </Link>

              <button
                onClick={
                  handleSignOut
                }
                className="btn btn-error text-white rounded-xl"
              >
                Sign Out
              </button>

            </div>
          ) : (
            <div className="flex gap-2">

              <Link
                href="/login"
                className="btn btn-outline flex-1 rounded-xl"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="btn btn-primary flex-1 rounded-xl"
              >
                Register
              </Link>

            </div>
          )}

        </div>
      )}
    </div>
  );
}