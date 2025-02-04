import React, {useState} from "react";

function PlantCard({plant, deletePlant, updatePrice}) {

  const [displayAvailability, setDisplayAvailability] = useState(true)
  const [newPrice, setNewPrice] = useState("")


  function toggleAvailability(){
    console.log(displayAvailability)
    setDisplayAvailability(!displayAvailability)
  }

  function handlePriceChange(e) {
    setNewPrice(e.target.value)
  }

  function handleUpdate(e) {
    e.preventDefault()
    updatePrice(plant.id, newPrice)
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
      <input
        type="number"
        value={newPrice}
        step="0.01"
        onChange={handlePriceChange}
        placeholder="New Price"
      />
      <button onClick={handleUpdate}>Update Price</button>
      <br></br>
      <button onClick={() => deletePlant(plant.id)} >Delete Plant</button>
    </li>
  );
}

export default PlantCard;
