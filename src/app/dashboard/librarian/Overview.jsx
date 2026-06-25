"use client";

import { useEffect, useState } from "react";

export default function Overview() {
  const [stats, setStats] =
    useState({
      totalBooks: 0,
      totalEarnings: 0,
      pendingRequests: 0,
      mostRequestedBooks: [],
    });

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/dashboard/librarian-overview`
    )
      .then((res) => res.json())
      .then((data) =>
        setStats(data)
      )
      .catch((err) =>
        console.log(err)
      );
  }, []);

  return (
    <div className="space-y-6">

      <h1 className="text-4xl font-bold">
        Librarian Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-5">

        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title">
              Total Books
            </h2>

            <p className="text-4xl font-bold">
              {stats.totalBooks}
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title">
              Total Earnings
            </h2>

            <p className="text-4xl font-bold">
              $
              {stats.totalEarnings}
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <h2 className="card-title">
              Pending Requests
            </h2>

            <p className="text-4xl font-bold">
              {
                stats.pendingRequests
              }
            </p>
          </div>
        </div>

      </div>

      <div className="card bg-base-100 shadow">

        <div className="card-body">

          <h2 className="card-title">
            Most Requested Books
          </h2>

          {stats
            .mostRequestedBooks
            ?.length === 0 ? (
            <p>
              No requests found
            </p>
          ) : (
            <div className="overflow-x-auto">

              <table className="table">

                <thead>
                  <tr>
                    <th>Book</th>
                    <th>Requests</th>
                  </tr>
                </thead>

                <tbody>

                  {stats.mostRequestedBooks.map(
                    (
                      book,
                      index
                    ) => (
                      <tr
                        key={index}
                      >
                        <td>
                          {
                            book.title
                          }
                        </td>

                        <td>
                          {
                            book.count
                          }
                        </td>
                      </tr>
                    )
                  )}

                </tbody>

              </table>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}