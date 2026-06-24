"use client";

import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("name") || "Admin");
    setEmail(localStorage.getItem("email") || "");
  }, []);

  return (
    <div className="min-h-screen bg-base-200 flex">
      <div className="w-64 bg-white shadow min-h-screen flex-shrink-0">
        {/* Sidebar */}
        <div className="p-4">
          <h2 className="font-bold text-xl mb-4">Admin Dashboard</h2>

          <div className="text-center mb-6">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src="https://i.pravatar.cc/150" alt="admin" />
              </div>
            </div>
            <h2 className="font-bold mt-3">{name}</h2>
            <p className="text-sm text-gray-500">{email}</p>
          </div>

          <ul className="space-y-2">
            <li>
              <button onClick={() => setActiveTab("overview")} className="btn btn-ghost w-full justify-start">
                Overview
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab("approval")} className="btn btn-ghost w-full justify-start">
                Book Approval Queue
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab("users")} className="btn btn-ghost w-full justify-start">
                Manage Users
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab("books")} className="btn btn-ghost w-full justify-start">
                Manage All Books
              </button>
            </li>
            <li>
              <button onClick={() => setActiveTab("transactions")} className="btn btn-ghost w-full justify-start">
                View All Transactions
              </button>
            </li>
          </ul>
        </div>
      </div>

        {/* Content */}
        <div className="flex-1 p-6">
          {activeTab === "overview" && (
            <div className="bg-white p-5 rounded-xl shadow">
              <h2 className="text-2xl font-bold">Overview</h2>
              <p className="text-gray-500 mt-2">Charts and stats coming soon.</p>
            </div>
          )}

          {activeTab === "approval" && (
            <div className="bg-white p-5 rounded-xl shadow">
              <h2 className="text-2xl font-bold">Book Approval Queue</h2>
              <p className="text-gray-500 mt-2">Pending approval books coming soon.</p>
            </div>
          )}

          {activeTab === "users" && (
            <div className="bg-white p-5 rounded-xl shadow">
              <h2 className="text-2xl font-bold">Manage Users</h2>
              <p className="text-gray-500 mt-2">Users table coming soon.</p>
            </div>
          )}

          {activeTab === "books" && (
            <div className="bg-white p-5 rounded-xl shadow">
              <h2 className="text-2xl font-bold">Manage All Books</h2>
              <p className="text-gray-500 mt-2">All books table coming soon.</p>
            </div>
          )}

          {activeTab === "transactions" && (
            <div className="bg-white p-5 rounded-xl shadow">
              <h2 className="text-2xl font-bold">View All Transactions</h2>
              <p className="text-gray-500 mt-2">Transactions table coming soon.</p>
            </div>
          )}
        </div>
    </div>
  );
}
