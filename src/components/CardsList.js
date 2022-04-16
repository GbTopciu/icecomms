import React from "react";
import { Data } from "../Data";
import { Datasm } from "../Data";
import { Dataft } from "../Data";
import Card from "./Card";
import Featured from "./Featured";
import SmallCard from "./SmallCard";

const CardsList = () => {
  return (
    <div>
      <div className="w-screen">
        {Data.map((dta) => (
          <Card
            key={dta.id}
            title={dta.title}
            description={dta.description}
            image={dta.image}
            button={dta.button}
          />
        ))}
      </div>

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

      <div className="md:flex md:flex-col lg:flex lg:flex-row lg:items-center lg:justify-center h-full w-screen bg-white overflow-hidden">
        {Dataft.map((dtaft) => (
          <Featured
            key={dtaft.id}
            title={dtaft.title}
            description={dtaft.description}
            image={dtaft.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsList;
