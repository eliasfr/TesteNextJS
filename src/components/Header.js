import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./media/Logo";
import MoreIcon from "./icons/MoreIcon";
import NextpayIcon from "./icons/NextpayIcon";

function Header() {
  return (
    <div className="header d-flex">
      <Navbar
        className="bg-white justify-content-between w-100 border-bottom"
        fixed="top"
      >
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
        <div className="d-flex text-muted m-lr-8">
          <div className="p-r-32">
            <NextpayIcon />
          </div>
          <MoreIcon />
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
