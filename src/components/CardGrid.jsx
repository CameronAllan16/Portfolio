import { useState } from "react";
import "../assets/cardGrid.css";
import React from "react";
import ExpandableCard from "./ExpandableCard";
import SidePanel from "./SidePanel";

function CardGrid({ cards }) {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <>
      <div className="card-grid">
        {cards.map((card, index) => (
          <ExpandableCard
            key={index}
            {...card}
            onClick={() => setSelectedCard(card)}
          />
        ))}
      </div>

      <SidePanel
        card={selectedCard}
        onClose={() => setSelectedCard(null)}
      />
    </>
  );
}

export default CardGrid;
