"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Overview from "./Overview";
import DeliveryHistory from "./DeliveryHistory";
import ReadingList from "./ReadingList";
import MyReviews from "./MyReviews";
import WishList from "./WishList";

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "user") {
      setName(localStorage.getItem("name") || "User");
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
    <div className="min-h-screen bg-base-200 p-6">
      <div className="grid md:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="bg-white rounded-xl p-4 shadow">
          <h2 className="font-bold text-xl mb-4">User Dashboard</h2>

          <div className="text-center mb-6">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img src="https://i.pravatar.cc/150" alt="user" />
              </div>
            </div>

            <h2 className="font-bold mt-3">{name}</h2>

            <p className="text-sm text-gray-500">{email}</p>
          </div>

          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveTab("overview")}
                className="btn btn-outline w-full"
              >
                Overview
              </button>
            </li>

            <li>
              <button
                onClick={() => setActiveTab("delivery")}
                className="btn btn-outline w-full"
              >
                Delivery History
              </button>
            </li>

            <li>
              <button
                onClick={() => setActiveTab("reading")}
                className="btn btn-outline w-full"
              >
                Reading List
              </button>
            </li>

            <li>
              <button
                onClick={() => setActiveTab("reviews")}
                className="btn btn-outline w-full"
              >
                My Reviews
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("wishlist")}
                className="btn btn-outline w-full"
              >
                WishList
              </button>
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="md:col-span-3">
          {activeTab === "overview" && <Overview />}

          {activeTab === "delivery" && <DeliveryHistory />}

          {activeTab === "reading" && <ReadingList />}

          {activeTab === "reviews" && <MyReviews />}

          {activeTab === "wishlist" && <WishList />}
        </div>
      </div>
    </div>
  );
}
