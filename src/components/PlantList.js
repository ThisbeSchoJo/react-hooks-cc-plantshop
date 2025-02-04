import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, deletePlant }) {

  const plantComponents = plants.map(plant => {
    return <PlantCard key={plant.id} plant={plant} deletePlant={deletePlant} />
  })
  
  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {plantComponents}
    </ul>
  );
}

export default PlantList;
