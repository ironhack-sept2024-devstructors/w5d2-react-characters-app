import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function CharacterDetails() {

  const { characterId } = useParams();

  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios.get(`https://ih-crud-api.herokuapp.com/characters/${characterId}`)
      .then(response => {
        setCharacter(response.data);
      })
      .catch( e => {
        console.log("Error getting character details from the API...");
        console.log(e);  
    });
  }, []);

  return (
    <>

      { character === null && <h2>Loading...</h2> }

      { character && 
        <div className="box">
          <p>Name: {character.name}</p>
          <p>Occupation: {character.occupation}</p>
          <p>Weapon: {character.weapon}</p>
        </div>
      }

      <Link to="/">Back to Homepage</Link>
      
    </>
  )
}


export default CharacterDetails;