import React from "react";
import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      src={`https://robohash.org/${props.monsterTemp.id}?set=set2`}
      alt="monster"
    />
    <h1>{props.monsterTemp.name}</h1>
    <h1>{props.monsterTemp.email}</h1>
    <h1>{props.monsterTemp.address.street}</h1>
    <h1>{props.monsterTemp.address.geo.lat}</h1>
    <h1>{props.monsterTemp.address.geo.lng}</h1>
  </div>
);
