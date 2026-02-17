import React from "react";
import "../assets/expandableCard.css";

function ExpandableCard({ title, shortDescription, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{shortDescription}</p>
      </div>
    </div>
  );
}

export default ExpandableCard;
