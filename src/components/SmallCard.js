import React from "react";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

const SmallCard = ({ title, artist, image }) => {
  return (
    <div className="flex-grow relative">
      <img className="w-full" src={image} alt="banners"></img>
      <div className="flex flex-col justify-start mt-5 absolute bottom-9 w-full text-white px-10">
        <h2 className="font-medium font-mono text-xl">{title}</h2>
        <p className="font-extralight font-mono text-base mb-5">by {artist}</p>
        <hr className="opacity-50"></hr>
        <div className="flex justify-between">
          <button className="font-mono mt-5">Read Story</button>
          <ArrowNarrowRightIcon className="w-6 h-6 mt-5"/>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
