"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Overview from "./Overview";
import BookApprovalQueue from "./BookApprovalQueue";
import ManageUsers from "./ManageUsers";
import ManageAllBooks from "./ManageAllBooks";
import ViewTransactions from "./ViewTransactions";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "admin") {
      setName(localStorage.getItem("name") || "Admin");
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

  return (
    <div className="min-h-screen bg-base-200 flex">
      <div className="w-64 bg-white shadow min-h-screen shrink-0">
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
          {activeTab === "overview" && <Overview />}

          {activeTab === "approval" && <BookApprovalQueue />}

          {activeTab === "users" && <ManageUsers />}

          {activeTab === "books" && <ManageAllBooks />}

          {activeTab === "transactions" && <ViewTransactions />}
        </div>
    </div>
  );
}
