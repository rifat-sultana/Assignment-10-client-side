"use client";

import Link from "next/link";

export default function LibrarianLayout({
  children,
}) {
  return (
    <div className="min-h-screen flex bg-base-200">

      <aside className="w-64 bg-base-100 shadow-lg">

        <div className="p-6 border-b">
          <h2 className="text-3xl font-bold">
            Librarian
          </h2>
        </div>

        <ul className="menu p-4 text-lg">

          <li>
            <Link href="/dashboard/librarian">
              Overview
            </Link>
          </li>

          <li>
            <Link href="/dashboard/librarian/add-book">
              Add Book
            </Link>
          </li>

          <li>
            <Link href="/dashboard/librarian/manage-inventory">
              Manage Inventory
            </Link>
          </li>

          <li>
            <Link href="/dashboard/librarian/manage-deliveries">
              Manage Deliveries
            </Link>
          </li>

        </ul>

      </aside>

      <main className="flex-1 p-8">
        {children}
      </main>

    </div>
  );
}