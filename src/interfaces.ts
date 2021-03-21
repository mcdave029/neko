export interface Breed {
  id: string;
  name: string;
  origin: string;
  description: string;
  temperament: string;
}

export interface CatDetails {
  id: string;
  url: string;
  breeds: Array<Breed>
}
