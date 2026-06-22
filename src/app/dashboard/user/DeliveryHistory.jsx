"use client";

import { useEffect, useState } from "react";

export default function DeliveryHistory() {
  const [deliveries, setDeliveries] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const email =
      localStorage.getItem("email");

    fetch(
      `http://localhost:5000/deliveries/${email}`
    )
      .then((res) => res.json())
     .then((data) => {
  console.log("Deliveries:", data);

  setDeliveries(data);
  setLoading(false);
})
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">
          Delivery History
        </h2>

        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-5 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-4">
        Delivery History
      </h2>

      {deliveries.length === 0 ? (
        <p>
          No delivery requests found.
        </p>
      ) : (
        <div className="overflow-x-auto">

          <table className="table table-zebra">

            <thead>
              <tr>
                <th>Book Title</th>
                <th>Delivery Fee</th>
                <th>Request Date</th>
                <th>Status</th>
                <th>Transaction ID</th>
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
                      $
                      {delivery.fee}
                    </td>

                    <td>
                      {delivery.requestDate
                        ? new Date(
                            delivery.requestDate
                          ).toLocaleDateString()
                        : "N/A"}
                    </td>

                    <td>
                      <span className="badge badge-warning">
                        {
                          delivery.status
                        }
                      </span>
                    </td>

                    <td>
                      {delivery.transactionId ||
                        "N/A"}
                    </td>
                  </tr>
                )
              )}

            </tbody>

          </table>

        </div>
      )}

    </div>
  );
}