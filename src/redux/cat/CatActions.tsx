import {
  FETCH_CATS_REQUEST,
  FETCH_CATS_SUCCESS,
  FETCH_CATS_FAILURE,
  INCREMENT_PAGINATION_PAGE,
  SELECTED_BREED_CHANGE
} from './CatTypes'
import { CatDetails } from '../../interfaces';
import { AppDispatch } from '../../redux/store';
import axios from 'axios';

export const fetchCatsRequest = () => {
  return {
    type: FETCH_CATS_REQUEST
  }
}

export const fetchCatsSuccess = (cats: Array<CatDetails>) => {
  return {
    type: FETCH_CATS_SUCCESS,
    payload: cats
  }
}

export const fetchCatsFailure = (error: string) => {
  return {
    type: FETCH_CATS_FAILURE,
    payload: error
  }
}

export const incrementPaginationPage = () => {
  return {
    type: INCREMENT_PAGINATION_PAGE
  }
}

export const selectedBreedChange = () => {
  return {
    type: SELECTED_BREED_CHANGE
  }
}

export const fetchCats = (breed_id: string, page: number) => {
  return (dispatch: AppDispatch) => {
    const options = {
      headers: { 'x-api-key': process.env.REACT_APP_CAT_API_KEY },
      params: { breed_id: breed_id, order: 'asc', limit: 5, page: page }
    };
    axios.get('https://api.thecatapi.com/v1/images/search', options)
      .then(response => {
        dispatch(fetchCatsSuccess(response.data))
        dispatch(incrementPaginationPage())
      })
      .catch(error => {
        dispatch(fetchCatsFailure(error.message))
      })
  }
}
