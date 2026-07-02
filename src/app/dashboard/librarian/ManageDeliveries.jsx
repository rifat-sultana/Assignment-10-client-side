"use client";

import { useEffect, useState } from "react";

export default function ManageDeliveries() {
  const [deliveries, setDeliveries] = useState([]);

  const librarianEmail = typeof window !== "undefined" ? localStorage.getItem("email") || "" : "";

  const loadDeliveries = () => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/deliveries?librarianEmail=${encodeURIComponent(librarianEmail)}`)
      .then((res) => res.json())
      .then((data) => setDeliveries(data));
  };

  useEffect(() => {
    loadDeliveries();
  }, []);

  const updateStatus = async (id, status) => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/deliveries/status/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status, librarianEmail }),
    });

    setDeliveries((prev) =>
      prev.map((d) => (d._id === id ? { ...d, status } : d))
    );
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "Delivered":
        return "badge-success";
      case "Dispatched":
        return "badge-info";
      default:
        return "badge-warning";
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Deliveries</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Client</th>
              <th>Book</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {deliveries.map((delivery, index) => (
              <tr key={delivery._id}>
                <td>{index + 1}</td>
                <td>{delivery.userEmail}</td>
                <td>{delivery.title}</td>
                <td>{new Date(delivery.requestDate).toLocaleDateString()}</td>
                <td>
                  <span className={`badge ${getStatusBadge(delivery.status)}`}>
                    {delivery.status}
                  </span>
                </td>
                <td className="space-x-2">
                  {delivery.status === "Pending Delivery" && (
                    <button
                      onClick={() => updateStatus(delivery._id, "Dispatched")}
                      className="btn btn-info btn-xs"
                    >
                      Dispatch
                    </button>
                  )}

                  {delivery.status === "Dispatched" && (
                    <button
                      onClick={() => updateStatus(delivery._id, "Delivered")}
                      className="btn btn-success btn-xs"
                    >
                      Mark Delivered
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
