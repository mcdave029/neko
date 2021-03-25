import {
  FETCH_BREEDS_REQUEST,
  FETCH_BREEDS_SUCCESS,
  FETCH_BREEDS_FAILURE,
  SELECT_BREED
} from './BreedTypes'
import { Breed } from '../../interfaces';
import { AppDispatch } from '../../redux/store';
import axios from 'axios';

export const fetchBreedsRequest = () => {
  return {
    type: FETCH_BREEDS_REQUEST
  }
}

export const fetchBreedsSuccess = (breeds: Array<Breed>) => {
  return {
    type: FETCH_BREEDS_SUCCESS,
    payload: breeds
  }
}

export const fetchBreedsFailure = (error: string) => {
  return {
    type: FETCH_BREEDS_FAILURE,
    payload: error
  }
}

export const selectBreed = (breed_id: string) => {
  return {
    type: SELECT_BREED,
    payload: breed_id
  }
}

export const fetchBreeds = () => {
  return (dispatch: AppDispatch) => {
    dispatch(fetchBreedsRequest())
    const options = {
      headers: {'x-api-key': process.env.REACT_APP_CAT_API_KEY}
    };
    axios.get('https://api.thecatapi.com/v1/breeds', options)
      .then(response => {
        dispatch(fetchBreedsSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchBreedsFailure(error.message))
      })
  }
} 
