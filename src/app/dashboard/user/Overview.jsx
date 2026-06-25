"use client";

import { useEffect, useState } from "react";
import {
  FaBook,
  FaTruck,
  FaDollarSign,
} from "react-icons/fa";

export default function Overview() {
  const [stats, setStats] = useState({
    booksRead: 0,
    pendingDeliveries: 0,
    totalSpent: 0,
  });

  useEffect(() => {
    const email =
      localStorage.getItem("email");

    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/dashboard/stats/${email}`
    )
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-4xl font-bold">
          Welcome Back!
        </h1>

        <p className="text-gray-500 mt-2">
          Monitor your reading progress and delivery updates.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex items-center gap-3">
            <FaBook
              size={24}
              className="text-blue-500"
            />

            <div>
              <p>Books Read</p>

              <h2 className="text-3xl font-bold">
                {stats.booksRead}
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex items-center gap-3">
            <FaTruck
              size={24}
              className="text-orange-500"
            />

            <div>
              <p>Pending Deliveries</p>

              <h2 className="text-3xl font-bold">
                {stats.pendingDeliveries}
              </h2>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <div className="flex items-center gap-3">
            <FaDollarSign
              size={24}
              className="text-green-500"
            />

            <div>
              <p>Total Spent</p>

              <h2 className="text-3xl font-bold">
                ${stats.totalSpent}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}