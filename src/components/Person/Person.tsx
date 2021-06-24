import { PersonType } from '../../types';

interface PersonProps {
  person: PersonType
}

function Person({ person }: PersonProps) {

  const height = 'Height: ' + person.height + ' cm';
  const mass = 'Weight: ' + person.mass + ' kg';
  const hair_color = 'Hair: ' + person.hair_color;
  const eye_color = 'Eyes: ' + person.eye_color;
  const birth_year = 'DOB: ' + person.birth_year;
  const gender = 'Gender: ' + person.gender;
  // const films = 'Films: ' + person.films;

  return (
    <div>
      <h3>{person.name}</h3>
      <ul>
        {[height, mass, hair_color, eye_color, birth_year, gender].map(item =>
          <li key="{item}">{item}</li>)
        }
      </ul>
    </div>
  );
}

export default Person
