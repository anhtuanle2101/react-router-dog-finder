import React from "react";
import {Link} from "react-router-dom";

const Nav = ({dogNames}) =>{
    return (
        <div class="Nav">
            <ul>
                {dogNames.map(dogName=><li><Link to={`/dogs/${dogName}`} >{dogName}</Link></li>)}
            </ul>
        </div>
    )
}

export default Nav;