import React from 'react'

import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { Row, Col, Button, ListGroup } from '../../../node_modules/react-bootstrap'
import { fetchJson } from '../../api'
import Person from '../Person'
import { useSwapi } from '../../api'
import { Person as PersonType } from "../../types/Person";

function People() {

  // gives the initial list of people
  const [people, setPeople] = React.useState<PersonType[]>([])

  React.useEffect(() => {
    fetchJson<{ results: PersonType[] }>('people')
      .then(peopleResponse => {
        if (peopleResponse) {

          setPeople(peopleResponse.results)
        }
      })
  }, []);

  // Rocky's code for search tool

  const [result, fetch] = useSwapi();

  // Holds the currest state of the search field
  const [searchText, setSearchText] = React.useState('');

  // Stores search text as user types
  const updateSearchText = React.useCallback(async (event) => {
    setSearchText(event.target.value);
  }, [setSearchText]);

  // Make the API call for search text

  const onSearch = React.useCallback(async () => {
    fetch(`/people/?search=${encodeURIComponent(searchText)}`);
  }, [fetch, searchText]);

  // searched people
  // TODO: display species and film names rather than URLs
  const EntityListItem = ({ item }: any) => {
    return (
      <ListGroup style={{ background: "#1c1e22" }} key={item.name} className="searched-people list-group-item">
        <div>
          <h3>
            {item.name}
          </h3>

          <li>Height: {item.height} cm</li>
          <li>Weight: {item.mass} kg</li>
          <li>Hair: {item.hair_color}</li>
          <li>Eyes: {item.eye_color}</li>
          <li>DOB: {item.birth_year}</li>
          <li>Gender: {item.gender}</li>
          <li>Species: {item.species}</li>
          <li>Films: {item.films}</li>

        </div>
      </ListGroup>
    );
  }

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <div className="prompt-me">
        Search for specific person
      </div>

      <div className="search-tool d-flex flex-row justify-content-center mb-4">

        <div>
          <input type="search" value={searchText} onChange={updateSearchText} className="form-control rounded flex-grow-1 mr-2" id="search-input" />
        </div>

        <div>
          <Button onClick={onSearch} id="search-button" >
            <i className="bi bi-search"></i>
          </Button>
        </div>

      </div>


      <Row>
        <Col xs={5} className="people_info m-5">
          {people.map((person, index) => {
            person.id = index + 1
            return <Person key={`person-${index}`} person={person} />
          })}
        </Col>
        <Col xs={5} className="search-results m-5" style={{ color: "white" }}>
          <ul>
            {result.map((item) => <EntityListItem item={item} />)}
          </ul>
        </Col>
      </Row>

    </div>
  )
}

export default People
