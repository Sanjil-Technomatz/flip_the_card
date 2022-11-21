import React, { useState, useEffect } from "react";
const Card = ({ id, name, visible, selectedCard, cardChange, gameStatus }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [rotatecard, setRotatecard] = useState(false);
  const isFlipped = selectedCard && selectedCard.includes(id) || gameStatus.includes(name)
  useEffect(() => {
    setIsVisible(visible);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }, [visible]);

  return (
    <div className={`card`}>

      <button id={id} className={'buttonClass'} onClick={() => { if (visible) cardChange(id); }} disabled={gameStatus.includes(name)} >
        {(isFlipped || isVisible) ? <span className="nameStyle">{name}</span> : <div className={`back`} ></div>}
      </button>

    </div >
  );
};

export default Card;
