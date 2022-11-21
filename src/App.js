import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import Card from "./component/Card";

function App() {
  const [visible, setVisible] = useState(false);
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };

  const arr = [
    "Sanjil",
    "Vijendra",
    "Hariram",
    "Himanshu",
    "Praveen",
    "Ravinder",
    "Lal",
    "Ankit",
  ];
  const final = useRef(shuffle([...arr, ...arr]));
  const [selectCard, setSelectCard] = useState([]);
  const [gameStatus, setGameStatus] = useState([]);

  const cardStatusChange = (card) => {
    if (selectCard.length === 2) setSelectCard([card]);
    else {
      setSelectCard([...selectCard, card]);
    }
  };
  useEffect(() => {
    if (selectCard.length === 2) {
      if (final.current[selectCard[0]] === final.current[selectCard[1]]) {
        setGameStatus([...gameStatus, final.current[selectCard[0]]]);
      } else {
        setTimeout(() => {
          setSelectCard([]);
        }, 1500);
      }
    }
  }, [selectCard]);
  return (
    <div style={{ width: "560px", marginLeft: "auto", marginRight: "auto" }}>
      <div className="cardContainer">
        {final.current.map((item, index) => {
          return (
            <Card
              key={index}
              id={index}
              name={item}
              gameStatus={gameStatus}
              visible={visible}
              selectedCard={selectCard}
              cardChange={cardStatusChange}
            />
          );
        })}
      </div>
      <button onClick={() => setVisible(true)}> Start </button>
    </div>
  );
}

export default App;
