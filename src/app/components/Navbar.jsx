"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Navigation Links
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Browse Books", href: "/browse-books" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    
    <div className="navbar bg-white sticky top-0 z-50 px-6 py-2 border-b border-gray-200 shadow-sm">
      <div className="navbar-start">
  
        <Link href="/" className="flex items-center gap-2.5">
         
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-indigo-50 border border-indigo-100 overflow-hidden">

            <Image
            src="/images/logo.png"
            alt="Logo"
            width={42} 
            height={42} 
            className="w-full h-full object-contain block"
            />
            <span className="hidden text-xl items-center justify-center">📖</span>
          </div>
          
        
          <span className="tracking-tight text-xl font-black text-slate-800">
            <span className="text-indigo-600 ">Biblio</span>
            <span className="text-amber-500 ml-0.5">Drop</span>
          </span>
        </Link>
      </div>

    
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal bg-gray-100 p-1 rounded-full gap-1 border border-gray-200">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`px-5 py-2 text-md font-bold rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-white text-indigo-600 font-bold shadow-sm border border-gray-200"
                      : "text-slate-600 hover:text-indigo-600 hover:bg-white/80"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

    
      <div className="navbar-end hidden md:flex items-center gap-3">
    
        <button className="btn btn-ghost btn-circle btn-sm border border-gray-200 text-slate-600 hover:bg-gray-100">
          🌙
        </button>

        {/* Login Button */}
        <Link href="/login" className="btn btn-outline btn-sm text-indigo-600 border-indigo-200 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 rounded-full px-5 font-semibold normal-case">
          Login
        </Link>

        {/* Register Button */}
        <Link href="/register" className="btn btn-sm bg-indigo-600 hover:bg-indigo-700 text-white border-none rounded-full px-5 font-semibold normal-case shadow-sm">
          Register
        </Link>
      </div>

      {/* Mobile Responsive Trigger */}
      <div className="navbar-end md:hidden flex items-center gap-2">
        <button className="btn btn-ghost btn-circle btn-sm border border-gray-200">🌙</button>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="btn btn-square btn-ghost btn-sm text-lg text-slate-700"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-4 right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-200 flex flex-col gap-2 md:hidden">
          <ul className="menu menu-vertical p-0 gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-xl font-medium ${pathname === link.href ? "bg-indigo-50 text-indigo-600 font-bold" : "text-slate-600"}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="divider my-1 before:bg-gray-200 after:bg-gray-400"></div>
          <div className="flex gap-2 w-full">
            <Link href="/login" className="btn btn-outline btn-sm flex-1 text-indigo-600 border-indigo-200 text-md font-bold rounded-xl">Login</Link>
            <Link href="/register" className="btn btn-sm text-md font-bold flex-1 bg-indigo-600 text-white border-none rounded-xl">Register</Link>
          </div>
        </div>
      )}
    </div>
  );
}