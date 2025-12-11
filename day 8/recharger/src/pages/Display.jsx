import React from "react";
import { Link } from "react-router-dom";

export default function Display() {
  const last = JSON.parse(localStorage.getItem("lastRecharge") || "null");

  if (!last) {
    return (
      <div className="page center">
        <h2>Last Recharge Display</h2>
        <p>No recharge found yet.</p>
        <Link to="/plans" className="btn">Go to Plans</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h2>Last Recharge Display</h2>
      <div className="card">
        <p><strong>Mobile:</strong> {last.mobile}</p>
        <p><strong>Plan:</strong> {last.plan.name}</p>
        <p><strong>Price:</strong> ₹{last.plan.price}</p>
        <p><small>{new Date(last.time).toLocaleString()}</small></p>
      </div>
    </div>
  );
}
