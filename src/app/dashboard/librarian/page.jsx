"use client";

import { useEffect, useState } from "react";

export default function LibrarianDashboard() {
  const [deliveries, setDeliveries] =
    useState([]);

  const loadDeliveries = () => {
    fetch(
      "http://localhost:5000/dashboard/deliveries"
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
      await fetch(
        `http://localhost:5000/delivery/status/${id}`,
        {
          method: "PATCH",
        }
      );

      loadDeliveries();
    };

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Librarian Dashboard
      </h1>

      <div className="overflow-x-auto">

        <table className="table table-zebra">

          <thead>
            <tr>
              <th>Book</th>
              <th>User</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {deliveries.map(
              (delivery) => (
                <tr
                  key={delivery._id}
                >
                  <td>
                    {delivery.title}
                  </td>

                  <td>
                    {
                      delivery.userEmail
                    }
                  </td>

                  <td>
                    {
                      delivery.status
                    }
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
                        className="btn btn-success btn-sm"
                      >
                        Mark Delivered
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