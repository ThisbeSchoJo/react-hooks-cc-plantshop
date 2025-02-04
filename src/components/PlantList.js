import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const plantComponents = plants.map(plant => {
    return <PlantCard key={plant.id} plant={plant}/>
  })
  
  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {plantComponents}
    </ul>
  );
}

export default PlantList;
