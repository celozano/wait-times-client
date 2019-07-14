import React from "react";
import Card from "./Card";

const CardList = ({ ports }) => {
  return ports.map((port, i) => {
    return (
      <Card
        key={port.port_number}
        name={port.name}
        number={port.port_number}
        status={port.status}
        waitTimes={port.wait_times}
      />
    );
  });
};

export default CardList;
