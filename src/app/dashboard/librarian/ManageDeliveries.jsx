"use client";

import { useEffect, useState } from "react";

export default function ManageDeliveries() {
  const [deliveries, setDeliveries] =
    useState([]);

  const loadDeliveries = () => {
    fetch(
      "http://localhost:5000/deliveries"
    )
      .then((res) => res.json())
      .then((data) =>
        setDeliveries(data)
      );
  };

  useEffect(() => {
    loadDeliveries();
  }, []);

  const markDelivered =
    async (id) => {
      const librarianEmail =
        localStorage.getItem("email") || "";

      await fetch(
        `http://localhost:5000/deliveries/status/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ librarianEmail }),
        }
      );

      loadDeliveries();
    };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Manage Deliveries
      </h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">

          <thead>
            <tr>
              <th>Client</th>
              <th>Book</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {deliveries.map(
              (delivery) => (
                <tr
                  key={delivery._id}
                >
                  <td>
                    {
                      delivery.userEmail
                    }
                  </td>

                  <td>
                    {
                      delivery.title
                    }
                  </td>

                  <td>
                    {new Date(
                      delivery.requestDate
                    ).toLocaleDateString()}
                  </td>

                  <td>

                    <span
                      className={`badge ${
                        delivery.status ===
                        "Delivered"
                          ? "badge-success"
                          : "badge-warning"
                      }`}
                    >
                      {
                        delivery.status
                      }
                    </span>

                  </td>

                  <td>

                    {delivery.status ===
                      "Pending Delivery" && (
                      <button
                        onClick={() =>
                          markDelivered(
                            delivery._id
                          )
                        }
                        className="btn btn-success btn-xs"
                      >
                        Complete
                      </button>
                    )}

                  </td>

                </tr>
              )
            )}

          </tbody>

        </table>
      </div>
    </div>
  );
}