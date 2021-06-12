import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="navlink">
        <li>
          <Link className="navlink" to="/">Home</Link>
        </li>
        <li>
          <Link className="navlink" to="/SCPs">All SCP's</Link>
        </li>
        <li>
          <Link className="navlink" to="/SCPs/new">New SCP</Link>
        </li>
      </ul>
    </nav>
  );
}
