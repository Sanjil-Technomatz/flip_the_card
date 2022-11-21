import React, { useState, useEffect } from "react";
const Card = ({ id, name, visible, selectedCard, cardChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(visible);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }, [visible]);

  return (
    <div id={id} className="card" onClick={() => cardChange(id)}>
      <span className="nameStyle">{selectedCard && selectedCard.includes(id) ? name : "#"}</span>
    </div>
  );
};

export default Card;
