"use client";

import { BookOpen } from "lucide-react";
import { UserRound } from "lucide-react";

export default function RoleSelector() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">

      <div className="card bg-base-100 shadow-2xl p-10 w-full max-w-3xl">

        <h1 className="text-4xl font-bold text-center mb-2">
          Choose Your Role
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Select your BiblioDrop workflow
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Reader */}

          <div className="border rounded-2xl p-8 hover:border-primary hover:shadow-lg cursor-pointer transition">

            <BookOpen
              size={50}
              className="mx-auto text-primary"
            />

            <h2 className="text-2xl font-bold text-center mt-4">
              Reader
            </h2>

            <p className="text-center mt-2">
              Browse books and request deliveries
            </p>

          </div>

          {/* Librarian */}

          <div className="border rounded-2xl p-8 hover:border-warning hover:shadow-lg cursor-pointer transition">

            <UserRound
              size={50}
              className="mx-auto text-warning"
            />

            <h2 className="text-2xl font-bold text-center mt-4">
              Librarian
            </h2>

            <p className="text-center mt-2">
            Manage Catalog & Deliveries
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}