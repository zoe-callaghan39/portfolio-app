import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const links = ["About", "CV", "Portfolio", "Blog"];

const NavBar = () => (
  <nav className="nav">
    <ul>
      {links.map((label) => (
        <li key={label}>
          <NavLink
            to={
              label.toLowerCase() === "about" ? "/" : `/${label.toLowerCase()}`
            }
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavBar;
