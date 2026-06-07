const PlaceCard = ({ image, name, borough }) => {
    return (
        <div className="place-card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{borough}</p>
            <button>View Details</button>
        </div>
    );
};

export default PlaceCard;