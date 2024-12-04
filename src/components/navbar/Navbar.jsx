import React, { useState } from "react";
import "./navbar.scss";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Bowbonish</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Platforms</a>
      </div>
      <div className="right">
        <a href="/" className="login">
          Login
        </a>
        <a href="/" className="register">
          Register
        </a>
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? 'menu active' : 'menu'}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Platforms</a>
          <a href="/">Login</a>
          <a href="/">Register</a>
        </div>
      </div>
    </nav>
  );
};
