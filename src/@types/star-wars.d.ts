export interface IPeople {
  name: string;
  height: string | number;
  mass: string | number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: "male" | "female" | "n/a";
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date | string;
  edited: Date | string;
  url: string;
}

export interface ISWApiResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}
