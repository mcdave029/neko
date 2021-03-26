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
  breeds: Array<Breed>;
}

export interface ActionType {
  type: string;
  payload: any;
}

export interface BreedState {
  loading: boolean;
  breeds: Breed[];
  error: string;
  selectedBreed: string;
}

export interface CatState {
  loading: boolean;
  cats: CatDetails[];
  error: string;
  paginationPage: number;
  canLoadMore: boolean;
}
