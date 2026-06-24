"use client";

import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28DFF", "#FF6B6B", "#6BCB77", "#4D96FF"];

export default function Overview() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalBooks: 0,
    totalDeliveries: 0,
    totalRevenue: 0,
    booksByCategory: [],
  });

  useEffect(() => {
    fetch("http://localhost:5000/dashboard/admin-overview")
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card bg-white shadow border">
          <div className="card-body">
            <h2 className="card-title text-sm text-gray-500">Total Users</h2>
            <p className="text-4xl font-bold text-blue-600">{stats.totalUsers}</p>
          </div>
        </div>

        <div className="card bg-white shadow border">
          <div className="card-body">
            <h2 className="card-title text-sm text-gray-500">Total Books</h2>
            <p className="text-4xl font-bold text-green-600">{stats.totalBooks}</p>
          </div>
        </div>

        <div className="card bg-white shadow border">
          <div className="card-body">
            <h2 className="card-title text-sm text-gray-500">Total Deliveries</h2>
            <p className="text-4xl font-bold text-orange-600">{stats.totalDeliveries}</p>
          </div>
        </div>

        <div className="card bg-white shadow border">
          <div className="card-body">
            <h2 className="card-title text-sm text-gray-500">Total Revenue</h2>
            <p className="text-4xl font-bold text-purple-600">${stats.totalRevenue}</p>
          </div>
        </div>
      </div>

      <div className="card bg-white shadow border">
        <div className="card-body">
          <h2 className="card-title text-xl font-bold mb-4">Books by Category</h2>
          {stats.booksByCategory.length === 0 ? (
            <p className="text-gray-500">No books found</p>
          ) : (
            <div className="flex flex-col md:flex-row items-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={stats.booksByCategory}
                    dataKey="count"
                    nameKey="category"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  >
                    {stats.booksByCategory.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}