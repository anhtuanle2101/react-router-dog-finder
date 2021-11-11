import React from "react";
import {useParams} from "react-router-dom";

const DogDetails = ({dogs})=>{
    const {name} = useParams();
    const dog = dogs.filter(dog=>dog.name===name)[0];
    return (
        <div class="DogDetails">
            <h3>{dog.name}</h3>
            <h5>Facts:</h5>
            <ul>
                {dog.facts.map(fact=><li>{fact}</li>)}
            </ul>
            <h5>Age: {dog.age}</h5>
            <img src={`./img/${dog.src}.jpg`} alt={`${dog.name}`}></img>
        </div>
    )
}

export default DogDetails;