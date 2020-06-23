import { createStore } from 'redux';
import reducer from './reducer';
export const initialState = {
  todos: [],
};

export const store = createStore(reducer);
