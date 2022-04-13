import { React, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as NavbarLogo } from "../assets/logo.svg";
import MobileNav from "./MobileNav";
import { MenuAlt4Icon } from "@heroicons/react/solid";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const menuRef = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <nav ref={menuRef}>
      <div className="md:w-screen">
        <div className="flex justify-around items-center mx-10 h-16 lg:mx-40">
          <div className="w-screen md:flex md:justify-start md:items-center">
            <NavbarLogo className="w-full" />
          </div>
          <div className="hidden md:flex md:justify-center md:items-center">
            <Link to="Stories" className="uppercase mx-5 font-medium text-sm">
              Stories
            </Link>
            <Link to="Features" className="uppercase mx-5 font-medium text-sm">
              Features
            </Link>
            <Link to="Pricing" className="uppercase mx-5 font-medium text-sm">
              Pricing
            </Link>
          </div>
          <div className="hidden md:flex md:shrink-0 md:h-10">
            <button className="uppercase font-medium text-sm text-white bg-black px-10">
              Get an Invite
            </button>
          </div>
          <div className="flex justify-end">
            <button ref={menuRef} onClick={() => setShow(!show)}>
              <MenuAlt4Icon className="w-6 h-6 text-slate-500 hover:text-slate-900 md:hidden" />
            </button>
          </div>
        </div>
        {show && <MobileNav show={show} setShow={setShow} />}
      </div>
    </nav>
  );
};

export default Navbar;
