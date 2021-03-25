import {
  FETCH_CATS_REQUEST,
  FETCH_CATS_SUCCESS,
  FETCH_CATS_FAILURE,
  INCREMENT_PAGINATION_PAGE,
  SELECTED_BREED_CHANGE,
} from './CatTypes'
import { CatState, ActionType } from '../../interfaces';

const initialState: CatState = {
  loading: false,
  cats: [],
  error: '',
  paginationPage: 1,
  canLoadMore: true
}

const reducer = (state: CatState = initialState, action: ActionType): CatState => {
  switch(action.type) {
    case FETCH_CATS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_CATS_SUCCESS:
      return {
        ...state,
        loading: false,
        cats: [...state.cats, ...action.payload],
        error: '',
        canLoadMore: action.payload.length > 0
      }
    case FETCH_CATS_FAILURE:
      return {
        ...state,
        loading: false,
        cats: [],
        error: action.payload
      }
    case INCREMENT_PAGINATION_PAGE:
      return {
        ...state,
        paginationPage: state.paginationPage + 1
      }
    case SELECTED_BREED_CHANGE:
      return {
        ...state,
        cats: [],
        paginationPage: 1,
        canLoadMore: true
      }
    default: return { ...state }
  }
}

export default reducer
