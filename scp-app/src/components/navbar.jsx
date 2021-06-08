import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/SCP's">All SCP's</Link>
        </li>
        <li>
          <Link to="/SCP's/new">New SCP</Link>
        </li>
      </ul>
    </nav>
  );
}
