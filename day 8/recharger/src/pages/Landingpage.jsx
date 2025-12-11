import React from "react";
import { Link } from "react-router-dom";
import ImageCard from "../components/ImageCard";

export default function Landing() {
  return (
    <div className="page center">
      <h1>Welcome to RechargeApp</h1>
      <p>A simple college project built with React.</p>

      <div className="actions">
        <Link to="/signup" className="btn large">Get Started</Link>
        <Link to="/plans" className="btn outline">View Plans</Link>
      </div>

      <ImageCard />
    </div>
  );
}
