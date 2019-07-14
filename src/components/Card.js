import React from "react";

const toHours = value => {
  if (typeof value === "string") {
    return value;
  }

  let hours = Math.floor(value / 60);
  let minutes = value % 60;

  return (
    hours.toString() + ":" + (minutes < 10 ? "0" : "") + minutes.toString()
  );
};

const traverse = (key, waitTimes) => {
  return Object.keys(waitTimes[key])
    .sort()
    .map(lane => {
      let name = lane === "ready" ? "ready lane" : lane;
      name = name
        .split(" ")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");

      let color =
        waitTimes[key][lane] <= 30
          ? "low"
          : waitTimes[key][lane] >= 31 && waitTimes[key][lane] <= 59
          ? "mid"
          : waitTimes[key][lane] >= 60
          ? "high"
          : "na";

      return (
        <li className={color === "na" ? "na" : ""}>
          {name}: <b className={color}>{toHours(waitTimes[key][lane])}</b>
        </li>
      );
    });
};

const Card = ({ name, number, status, waitTimes }) => {
  let vehiculos = traverse("vehicle", waitTimes);
  let peatonal = traverse("pedestrian", waitTimes);

  return (
    <div className="col-sm-12 col-lg-3 pb-3">
      <div className="card border-dark">
        <div className="card-body">
          <h2 className="card-header bg-transparent">
            <b className="ml-n3" style={{ color: "#EA5C5A" }}>
              {name}
            </b>
          </h2>
          <h5
            className="card-title pt-3"
            style={{ textDecoration: "underline" }}
          >
            Vehículos
          </h5>
          <ul style={{ listStyle: "none" }}>{vehiculos}</ul>
          <h5 className="card-title" style={{ textDecoration: "underline" }}>
            Peatonal
          </h5>
          <ul style={{ listStyle: "none" }}>{peatonal}</ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
