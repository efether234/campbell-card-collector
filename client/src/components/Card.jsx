import "./Card.css";

const Card = ({ card }) => {
  return (
    <>
      <td>
        {card.image_uris && card.image_uris.small ? (
          <a href={card.image_uris.large}>
            <img src={card.image_uris.small} />
          </a>
        ) : (
          "no image"
        )}
      </td>
      <td>{card.name}</td>
      <td>
        <i className={"ss ss-" + card.set + " ss-" + card.rarity}></i>
      </td>
      <td>{card.power || card.toughness ? card.power / card.toughness : ""}</td>
      <td>{card.cmc}</td>
    </>
  );
};

export default Card;
