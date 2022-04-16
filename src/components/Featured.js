import React from "react";

const Featured = ({ title, description, image }) => {
  return (
    <div className="flex flex-col items-center justify-center p-20">
      <img
        className="w-20 h-20 object-scale-down"
        src={image}
        alt="logos"
      ></img>
      <h2 className="object-top font-mono text-xl mb-10">{title}</h2>
      <p className="object-contain font-thin text-lg">{description}</p>
    </div>
  );
};

export default Featured;
