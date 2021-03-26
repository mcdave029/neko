import { AppDispatch } from "./store";
import { fetchBreedsFailure } from "../redux/breed/BreedActions";
import { fetchCatsFailure } from "../redux/cat/CatActions";

export { selectBreed, fetchBreeds } from "../redux/breed/BreedActions";
export { fetchCats, selectedBreedChange } from "../redux/cat/CatActions";

export const clearError = () => {
  return (dispatch: AppDispatch) => {
    dispatch(fetchBreedsFailure(""));
    dispatch(fetchCatsFailure(""));
  };
};
