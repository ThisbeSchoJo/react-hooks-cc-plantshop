import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => {
      response.json().then(plantsData => setPlants(plantsData))
    })
  }, [])

  function updateSearchText(event){
    setSearchText(event.target.value)
  }

  const filteredPlants = plants.filter(plant => {
    return plant.name.toUpperCase().includes(searchText.toUpperCase())
  })

  function addPlant(newPlant){
    setPlants([...plants, newPlant])
  }

  const deletePlant = (id) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
    .then(response => {
      if (response.ok) {
        setPlants(plants.filter(plant => plant.id != id))
      } else {
        alert("Error: unable to delete plant")
      }
    })
  }

  const updatePrice = (id, newPrice) => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: newPrice,
      }),
    })
    .then(response => {
      if (response.ok) {
        setPlants((prevPlants) => 
        prevPlants.map((plant) => 
          plant.id === id 
        ? {...plant, price: newPrice} 
        : plant
      ))
      } else {
        alert("Error: Unable to update price.")
      }
    })
  }

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search updateSearchText={updateSearchText} searchText={searchText}/>
      <PlantList plants={filteredPlants} deletePlant={deletePlant} updatePrice={updatePrice}/>
    </main>
  );
}

export default PlantPage;
