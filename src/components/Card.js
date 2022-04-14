import React from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

const Card = ({title, description, image}) => {
  return (
      //First Card
      <div className="flex h-screen w-screen overflow-hidden object-cover">
          <div className="flex flex-col md:flex md:flex-row h-full w-full">
        <div className="order-last md:order-first h-full md:w-11/12 md:h-3/5 bg-black py-10 px-5 md:py-15 md:px-10 lg:py-40 lg:px-30 ">
          <h2 className="uppercase text-white font-semibold text-5xl tracking-wide pb-5">
            {title}
          </h2>
          <p className="text-gray-300 pb-5">
           {description}
          </p>
          <button className="text-white flex justify-center items-center">
            Get an Invite
            <ArrowNarrowRightIcon className="h-6" />
          </button>
        </div>
        <div className="h-screen w-screen md:w-screen md:h-screen">
          <img
            className="overflow-hidden h-full w-full object-cover md:h-3/5 md:w-full md:object-cover"
            src={image}
            alt="banner"
          ></img>
        </div>
        </div>
      </div>
  );
};

export default Card;
