import React from "react";
import "../assets/expandableCard.css";

function ExpandableCard({ title, description, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ExpandableCard;
