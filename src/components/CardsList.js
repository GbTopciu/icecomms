import React from "react";
import { Data } from "../Data";
import { Datasm } from "../Data";
import Card from "./Card";
import SmallCard from "./SmallCard";

const CardsList = () => {
  return (
    <div className="w-screen h-screen">
      {Data.map((dta) => (
        <Card
          key={dta.id}
          title={dta.title}
          description={dta.description}
          image={dta.image}
          button={dta.button}
        />
      ))}

      <div className="md:flex md:flex-wrap lg:flex lg:flex-nowrap w-screen overflow-hidden">
        {Datasm.map((dtasm) => (
          <SmallCard
            key={dtasm.id}
            title={dtasm.title}
            artist={dtasm.artist}
            image={dtasm.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsList;
