import Card from "./Card";

const Cards = ({ cards }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Set</th>
          <th>Power/Toughness</th>
          <th>CMC</th>
        </tr>
      </thead>
      <tbody>
        {cards.map((card) => (
          <tr key={card.id}>
            <Card card={card} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Cards;
