import { Film } from "./Film";
import { Species } from "./Species";

export interface Person {
    id: number
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    species: string[],
    fullSpecies?: Species[],
    films: string[]
    fullFilms?: Film[]
  }