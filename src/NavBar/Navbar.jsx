import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'

const Nav = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/address">Address</Link>
        </li>
        <li>
          {" "}
          <Link to="/email">Email</Link>
        </li>
        {/* <div>
          <input type="text" placeholder="Search Here" />
          <button>Submit</button>
        </div> */}
      </ul>
    </div>
  );
};

export default Nav;
