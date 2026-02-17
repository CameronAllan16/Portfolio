import { useEffect } from "react";
import React from "react";
import "../assets/sidePanel.css";

function SidePanel({ card, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className={`panel-overlay ${card ? "visible" : ""}`} onClick={onClose}>
      <div
        className={`side-panel ${card ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {card && (
          <>
            <h2>{card.title}</h2>
            <img src={card.image} alt={card.title} />
            <p>{card.description}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default SidePanel;
