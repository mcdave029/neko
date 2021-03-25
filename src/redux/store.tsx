import { createStore, applyMiddleware, Store, Dispatch, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import breedReducer from './breed/BreedReducer' 
import catReducer from './cat/CatReducer' 
import { BreedState, CatState, ActionType } from '../interfaces';

interface CombineState {
  breed: BreedState,
  cat: CatState
}

const store: Store<CombineState, ActionType> & {
    dispatch: Dispatch
} = createStore(combineReducers({
  breed: breedReducer,
  cat: catReducer
}), applyMiddleware(thunk))

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
