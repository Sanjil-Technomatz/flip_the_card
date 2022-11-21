import React, { useState, useEffect } from "react";
const Card = ({ name, visible }) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(visible);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  }, [visible]);
  return (
    <div className="card" onClick={() => setIsVisible(true)}>
      <span className="nameStyle">{isVisible ? name : "#"}</span>
    </div>
  );
};

export default Card;
