import React from "react";
import { Link } from "react-router-dom"

const DogList = ({dogs})=>{
    return (
        <div class="DogList">
            {dogs.map(dog=><Link to={`/dogs/${dog.name}`}><img src={`./img/${dog.src}.jpg`} alt={`${dog.name}`}></img></Link>)}
        </div>
    )
}

export default DogList;