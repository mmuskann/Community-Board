const PlaceCard = ({ image, name, borough, location }) => {
  return (
    <div className="place-card">
      <img src={image} alt={name} />

      <h2>{name}</h2>
      <h3>{borough}</h3>

      <a href={location} target="_blank" rel="noreferrer">
        Location
      </a>
    </div>
  );
};

export default PlaceCard;