import {
  FETCH_BREEDS_REQUEST,
  FETCH_BREEDS_SUCCESS,
  FETCH_BREEDS_FAILURE,
  SELECT_BREED
} from './BreedTypes'
import { BreedState, ActionType } from '../../interfaces';

const initialState: BreedState = {
  loading: false,
  breeds: [],
  error: '',
  selectedBreed: 'DEFAULT'
}

const reducer = (state: BreedState = initialState, action: ActionType): BreedState => {
  switch(action.type) {
    case FETCH_BREEDS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_BREEDS_SUCCESS:
      return {
        ...state,
        loading: false,
        breeds: action.payload,
        error: ''
      }
    case FETCH_BREEDS_FAILURE:
      return {
        ...state,
        loading: false,
        breeds: [],
        error: action.payload
      }
    case SELECT_BREED:
      return {
        ...state,
        selectedBreed: action.payload
      }
    default: return { ...state }
  }
}

export default reducer
