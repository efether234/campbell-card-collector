import { useState, useEffect } from "react";
import Cards from "./components/Cards";

const App = () => {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/cards")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="container">
      <h1>Campbell Card Collector</h1>
      {cards && <Cards cards={cards} />}
    </div>
  );
};

export default App;
