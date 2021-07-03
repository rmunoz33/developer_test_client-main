import { Link } from "react-router-dom";
import { Person as PersonType } from "../../types/Person";

interface PersonProps {
  person: PersonType;
}

function Person({ person }: PersonProps) {
  const height = "Height: " + person.height + " cm";
  const mass = "Weight: " + person.mass + " kg";
  const hair_color = "Hair: " + person.hair_color;
  const eye_color = "Eyes: " + person.eye_color;
  const birth_year = "DOB: " + person.birth_year;
  const gender = "Gender: " + person.gender;
  const { fullFilms = [], fullSpecies = [] } = person;

  console.log(person, fullFilms);
  return (
    <div>
      <Link to={`/people/${person.id}`}>
        <h3>{person.name}</h3>
      </Link>
      <ul>
        {[height, mass, hair_color, eye_color, birth_year, gender].map(
          (item) => (
            <li key={item}>{item}</li>
          )
        )}
        {fullFilms.map((film, index) => {
          console.log("rendering film", film);
          return <li key={`film-${index}`}>FILM: {film.title}</li>;
        })}
        {fullSpecies.map((species, index) => (
          <li key={`species-${index}`}>SPECIES: {species.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Person;
