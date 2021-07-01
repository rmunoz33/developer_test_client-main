export interface PersonType {
  id: number
  name: string,
  height: string,
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: string,
  species: string, // TODO: make this display species name, not URL
  films: Films[];
}

export interface Films {
  [index: number]: string; // TODO: make this display film names, not URLs
}