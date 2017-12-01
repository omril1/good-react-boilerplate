import { combineReducers, Reducer } from 'redux';

export interface RootState {
  todos: TodoStoreState;
}

export default combineReducers<RootState>({
});
