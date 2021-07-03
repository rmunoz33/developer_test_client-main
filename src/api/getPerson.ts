import { fetchJson } from "."
import { Film } from "../types/Film"
import { Person } from "../types/Person"
import { Species } from "../types/Species"

export const getPerson = async (id: number): Promise<Person | false> => {
    const response = await fetchJson<Person>(`people/${id}`)
    // console.log(response, fetchJson.mock)
    if (!response) {
        return false
    }
    const person = response as Person
    person.fullFilms = []
    const films = person.films
    films.forEach(async film => {
        const filmResponse = await fetchJson<Film>(film)
        if (filmResponse) {
            person.fullFilms!.push(filmResponse as Film)
        }
    })

    person.fullSpecies = []
    const species = person.species
    species.forEach(async species => {
        const speciesResponse = await fetchJson<Species>(species)
        if (speciesResponse) {
            person.fullSpecies!.push(speciesResponse as Species)
        }
    })
    return person
}