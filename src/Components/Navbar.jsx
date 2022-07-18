import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="nav">
      <p>Home</p>
      <div className="logo">LOGO</div>
      <ul className="items-wrapper">
        <li className="item item-s">TOPICS +</li>
        <li className="item item-s">CONTACT US</li>
        <li className="item item-s">ABOUT</li>
        <li className="item subs">SUBSCRIBE</li>
        <li className="item">
          <BiSearch className="search" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
