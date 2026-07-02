"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const menuItems = [
  { label: "Overview", href: "/dashboard/librarian" },
  { label: "Add Book", href: "/dashboard/librarian/add-book" },
  { label: "Manage Inventory", href: "/dashboard/librarian/manage-inventory" },
  { label: "Manage Deliveries", href: "/dashboard/librarian/manage-deliveries" },
];

export default function LibrarianLayout({ children }) {
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "librarian") {
      setAuthorized(true);
      setName(localStorage.getItem("name") || "Librarian");
      setEmail(localStorage.getItem("email") || "");
    } else {
      router.replace("/");
    }
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!authorized) return null;

  return (
    <div className="min-h-screen bg-base-200 flex">
      <div className="w-64 bg-white shadow min-h-screen shrink-0">
        <div className="p-4">
          <h2 className="font-bold text-xl mb-4">Librarian Dashboard</h2>

          <div className="text-center mb-6">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src="https://i.pravatar.cc/150" alt="librarian" />
              </div>
            </div>
            <h2 className="font-bold mt-3">{name}</h2>
            <p className="text-sm text-gray-500">{email}</p>
          </div>

          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`btn btn-ghost w-full justify-start ${
                    pathname === item.href ? "bg-base-200 font-semibold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex-1 p-6">{children}</div>
    </div>
  );
}
