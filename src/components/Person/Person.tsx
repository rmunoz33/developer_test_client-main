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
      </ul>
      {fullFilms.length && <ul className="search-results">Films</ul>}
      {fullFilms.map((film, index) => {
        return (
          <li className="unbulleted-list" key={`film-${index}`}>
            {film.title} ({parseInt(film.release_date)})
          </li>
        );
      })}
      {fullSpecies.length && <ul className="search-results">Species</ul>}
      {fullSpecies.map((species, index) => (
        <li className="unbulleted-list" key={`species-${index}`}>
          {species.name}
        </li>
      ))}
    </div>
  );
}

export default Person;
