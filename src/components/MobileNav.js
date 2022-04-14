import { React } from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
 
  return (
    <div className="w-screen">
    <div className="flex flex-col items-center md:hidden">
      <Link className="w-full ml-4 text-slate-500 font-medium block py-2 px-4 text-sm hover:bg-slate-200 hover:text-slate-900" to="/">
        Stories
      </Link>
      <Link className="w-full ml-4 text-slate-500 font-medium block py-2 px-4 text-sm hover:bg-slate-200 hover:text-slate-900" to="/about">
        Pricing
      </Link>
      <Link className="w-full ml-4 text-slate-500 font-medium block py-2 px-4 text-sm hover:bg-slate-200 hover:text-slate-900" to="/contact">
        Stories
      </Link>
    </div>
    </div>
  );
};

export default MobileNav;
