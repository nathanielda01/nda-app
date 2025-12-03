import React from "react";
import { Link } from "react-router";

export default function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the home page of the NDA Application.</p>

      <Link to="/projects">Go to Projects</Link>
    </div>
  );
};