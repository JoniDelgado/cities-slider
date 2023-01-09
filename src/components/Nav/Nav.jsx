import React from "react";
import "./nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <h2 className="nav__title">Design.</h2>
      <img className="nav__image" src="icons/menu.png" alt="" />
      <input className="nav__search" type="text" placeholder="Search" />
    </nav>
  );
};

export default Nav;
