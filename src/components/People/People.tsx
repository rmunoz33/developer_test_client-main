import React from 'react'

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
      <div className="people_info">
        {people.map(person => <Person person={person} />)}
      </div>
    </div>
  )
}

export default People
