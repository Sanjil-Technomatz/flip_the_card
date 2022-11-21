import React, { useState, useEffect } from "react";
const Card = ({ id, name, visible, selectedCard, cardChange, gameStatus }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(visible);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }, [visible]);

  return (
    <button id={id} className={`card`} onClick={() => cardChange(id)} disabled={gameStatus.includes(name)} >
      <span className="nameStyle">{(selectedCard && selectedCard.includes(id) || gameStatus.includes(name) || isVisible) ? name : "#"}</span>
    </button>
  );
};

export default Card;
