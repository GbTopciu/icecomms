import React from "react";
import { Data } from "../Data";
import Card from "./Card";

const CardsList = () => {
  return (
    <div>
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
  );
};

export default CardsList;
