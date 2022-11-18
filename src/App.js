import "./App.css";
import Card from "./component/Card";

function App() {
  function shuffle(array) {
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
  }

  const arr = [
    "Sanjil",
    "Vijendra",
    "Hariram",
    "Himanshu",
    "Praveen",
    "Ravindra",
    "Lal",
    "Ankit",
  ];
  const final = [...arr, ...arr];
  shuffle(final);
  return (
    <div style={{ width: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
      <div className="cardContainer">
        {final.map((item, index) => {
          return <Card key={index} name={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
