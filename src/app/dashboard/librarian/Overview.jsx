"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28DFF", "#FF6B6B", "#6BCB77", "#4D96FF"];

export default function Overview() {
  const [stats, setStats] = useState({
    totalBooks: 0,
    totalEarnings: 0,
    pendingRequests: 0,
    mostRequestedBooks: [],
    booksByStatus: [],
  });

  useEffect(() => {
    const librarianEmail = localStorage.getItem("email") || "";
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/librarian-overview?librarianEmail=${encodeURIComponent(librarianEmail)}`)
      .then((res) => res.json())
      .then((data) =>
        setStats({
          totalBooks: data.totalBooks || 0,
          totalEarnings: Number(data.totalEarnings) || 0,
          pendingRequests: data.pendingRequests || 0,
          mostRequestedBooks: data.mostRequestedBooks || [],
          booksByStatus: data.booksByStatus || [],
        })
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Librarian Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-white shadow border">
          <div className="card-body">
            <h2 className="card-title text-sm text-gray-500">Total Books</h2>
            <p className="text-4xl font-bold text-blue-600">{stats.totalBooks}</p>
          </div>
        </div>

        <div className="card bg-white shadow border">
          <div className="card-body">
            <h2 className="card-title text-sm text-gray-500">Total Earnings</h2>
            <p className="text-4xl font-bold text-green-600">${stats.totalEarnings.toFixed(2)}</p>
          </div>
        </div>

        <div className="card bg-white shadow border">
          <div className="card-body">
            <h2 className="card-title text-sm text-gray-500">Pending Requests</h2>
            <p className="text-4xl font-bold text-orange-600">{stats.pendingRequests}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card bg-white shadow border">
          <div className="card-body">
            <h2 className="card-title text-xl font-bold mb-4">Books by Status</h2>
            {stats.booksByStatus.length === 0 ? (
              <p className="text-gray-500">No books found</p>
            ) : (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={stats.booksByStatus}
                    dataKey="count"
                    nameKey="status"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  >
                    {stats.booksByStatus.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        <div className="card bg-white shadow border">
          <div className="card-body">
            <h2 className="card-title text-xl font-bold mb-4">Most Requested Books</h2>
            {stats.mostRequestedBooks.length === 0 ? (
              <p className="text-gray-500">No requests found</p>
            ) : (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={stats.mostRequestedBooks}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="title" tick={{ fontSize: 11 }} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#0088FE" radius={[4, 4, 0, 0]} name="Requests" />
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>

      <div className="card bg-white shadow border">
        <div className="card-body">
          <h2 className="card-title text-xl font-bold mb-4">Most Requested Books</h2>
          {stats.mostRequestedBooks.length === 0 ? (
            <p className="text-gray-500">No requests found</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Book</th>
                    <th>Requests</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.mostRequestedBooks.map((book, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{book.title}</td>
                      <td>{book.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
