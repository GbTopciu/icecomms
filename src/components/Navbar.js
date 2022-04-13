import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as NavbarLogo } from "../logos/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between h-14 mx-auto">
      <div className="flex justify-start items-center">
        <NavbarLogo className="ml-40" />
      </div>
      <div className="flex justify-center items-center">
        <Link to="Stories" className="uppercase mx-5 font-medium text-sm">Stories</Link>
        <Link to="Features" className="uppercase mx-5 font-medium text-sm">Features</Link>
        <Link to="Pricing" className="uppercase mx-5 font-medium text-sm">Pricing</Link>
      </div>
      <div className="flex justify-end items-center mr-40">
      <button className="uppercase font-medium text-sm text-white bg-black px-10 py-2">Get an Invite</button>
      </div>
    </nav>
  );
};

export default Navbar;
