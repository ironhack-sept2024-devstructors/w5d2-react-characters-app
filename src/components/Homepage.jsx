import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Homepage(){

    const [characters, setCharacters] = useState(null);

    useEffect(() => {
        axios.get("https://ih-crud-api.herokuapp.com/characters")
            .then( (response) => {
                setCharacters(response.data);
            })
            .catch( e => {
                console.log("Error getting characters from the API...");
                console.log(e);  
            } );
    }, []);

    return (
        <>
            { characters === null 
                ? <h2>Loading...</h2> 
                : <h2>Numbers of characters in our API: {characters.length}</h2>  
            }

            <div className="card-list">
                { characters && characters.map( (characterDetails, index) => {
                    return (
                        <div key={index} className="card">
                            <h3>{characterDetails.name}</h3>
                            <p>{characterDetails.occupation}</p>
                            <p>{characterDetails.weapon}</p>

                            <Link to={`/characters/${characterDetails.id}`}>More Details</Link>
                        </div>
                    );
                } )}
            </div>
        </>
    );
}

export default Homepage;