import React, {useState} from "react";

function PlantCard({plant, deletePlant}) {

  const [displayAvailability, setDisplayAvailability] = useState(true)

  function toggleAvailability(){
    console.log(displayAvailability)
    setDisplayAvailability(!displayAvailability)
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {displayAvailability ? (
        <button onClick={toggleAvailability} className="primary">In Stock</button>
      ) : (
        <button onClick={toggleAvailability} >Out of Stock</button>
      )}
      {/* <button onClick={toggleAvailability} className="primary">{displayAvailability ? "In Stock" : "Out of Stock"}</button> */}
      <button onClick={() => deletePlant(plant.id)} >Delete</button>
    </li>
  );
}

export default PlantCard;
