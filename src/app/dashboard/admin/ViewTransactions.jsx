"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ViewTransactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/deliveries/`)
      .then((res) => res.json())
      .then((data) => {
        setTransactions(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load transactions");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">View All Transactions</h2>
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">View All Transactions</h2>
      <p className="text-gray-500 mb-4">{transactions.length} transactions total</p>

      {transactions.length === 0 ? (
        <p className="text-gray-500">No transactions found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Transaction ID</th>
                <th>User Email</th>
                <th>Librarian Email</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t, index) => (
                <tr key={t._id}>
                  <td>{index + 1}</td>
                  <td className="font-mono text-xs">{t.transactionId}</td>
                  <td>{t.userEmail}</td>
                  <td>{t.librarianEmail || "-"}</td>
                  <td>${t.fee}</td>
                  <td>{new Date(t.requestDate).toLocaleDateString()}</td>
                  <td>
                    <span
                      className={`badge ${
                        t.status === "Delivered"
                          ? "badge-success"
                          : "badge-warning"
                      }`}
                    >
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
