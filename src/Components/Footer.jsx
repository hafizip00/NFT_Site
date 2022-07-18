import React from "react";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
const Footer = () => {
  return (
    <div>
      <div className="foot">
        <div className="logo">
          <p>LOGO</p>
        </div>
        <div className="site-map">
          <p>CONTACT</p>
          <p>TERMS</p>
          <p>PRIVACY</p>
        </div>
        <div className="email-sub">
          <input type="email" placeholder="Email" />
          <li className="subs">SUBSCRIBE</li>
        </div>
      </div>
      <hr className="bar" />
      <div className="socials">
        <p>Copyright 2022 BlocTak - All Rights Reserved</p>
        <div className="social-icons">
          <BsTwitter className="icon" />
          <AiFillInstagram className="icon" />
          <SiDiscord className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
