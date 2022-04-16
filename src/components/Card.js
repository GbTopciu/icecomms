import React from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

const Card = ({ title, description, image, button }) => {
  return (
    //First Card
    <div className="w-full md:h-700 flex overflow-hidden space-x-0 space-y-0 ">
      <div className="flex flex-col md:flex md:flex-row w-screen">
        <div className="order-last md:order-first  md:w-11/12 bg-black py-10 px-5 md:py-15 md:px-10 lg:py-40 lg:px-30">
          <h2 className="uppercase text-white font-semibold text-5xl tracking-wide pb-5">
            {title}
          </h2>
          <p className="text-gray-300 pb-5">{description}</p>
          <button className="text-white flex justify-center items-center">
            {button}
            <ArrowNarrowRightIcon className="h-6" />
          </button>
        </div>
        <div className="w-screen h-full md:w-screen ">
          <img
            className="overflow-hidden h-full w-full md:w-full object-cover "
            src={image}
            alt="banner"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Card;
