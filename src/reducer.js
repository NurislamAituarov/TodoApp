import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, SET_VISIBILITY } from './types';
import { initialState } from './store';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            id: action.id,
            title: action.payload,
            completed: false,
            visible: true,
          },
        ],
      });

    case DELETE_TODO:
      console.log(action.payload);
      return Object.assign({}, state, {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      });

    case COMPLETE_TODO:
      return Object.assign({}, state, {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return Object.assign({}, todo, {
              completed: !todo.completed,
            });
          }
          return todo;
        }),
      });
    case SET_VISIBILITY:
      if (action.payload === 'all') {
        return Object.assign({}, state, {
          todos: state.todos.map((todo) => {
            return Object.assign({}, todo, {
              visible: true,
            });
          }),
        });
      } else if (action.payload === 'notCompleted') {
        return Object.assign({}, state, {
          todos: state.todos.map((todo) => {
            if (todo.completed === true) {
              return Object.assign({}, todo, {
                visible: false,
              });
            } else {
              return Object.assign({}, todo, {
                visible: true,
              });
            }
          }),
        });
      } else if (action.payload === 'completed') {
        return Object.assign({}, state, {
          todos: state.todos.map((todo) => {
            if (todo.completed === false) {
              return Object.assign({}, todo, {
                visible: false,
              });
            } else {
              return Object.assign({}, todo, {
                visible: true,
              });
            }
          }),
        });
      }
  }
  return state;
};

export default reducer;
