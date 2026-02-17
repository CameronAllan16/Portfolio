import { useState } from "react";
import "../assets/cardGrid.css";
import React from "react";
import ProjectCard from "./ProjectCard";
import SidePanel from "./SidePanel";

function CardGrid({ cards }) {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <>
      <div className="card-grid">
        {cards.map((card, index) => (
          <ProjectCard
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
