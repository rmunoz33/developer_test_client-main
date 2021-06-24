import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import Button from '../../../node_modules/react-bootstrap/Button'
import { fetchJson } from '../../api'
import { PersonType } from '../../types'
import Person from '../Person'

function People() {
  const [people, setPeople] = React.useState<PersonType[]>([])

  React.useEffect(() => {
    fetchJson<{ results: PersonType[] }>('people')
      .then(peopleResponse => setPeople(peopleResponse.results))
  }, [])

  return (
    <div>
      <h1>Star Wars Characters</h1>
      <div className="prompt-me">
        Search for specific person
      </div>

      <div className="search-tool d-flex flex-row justify-content-center mb-4">
        
        <div>
          <input
            // type="search" 
            // value={searchText} 
            // onChange={updateSearchText} 
            className="form-control rounded flex-grow-1 mr-2"
            id="search-input"
          />
        </div>
        
        <div>
          <Button
          // onClick={onSearch}
          id="search-button"
          >
            <i className="bi bi-search"></i>
          </Button>
        </div>

      </div>

      <div className="people_info m-5">
        {people.map(person => <Person person={person} />)}
      </div>

    </div>
  )
}

export default People
