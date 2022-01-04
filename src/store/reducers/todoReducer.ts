import {
  TodoActionsType,
  SET_TODOS,
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
} from '../actions/todoActionsTypes';
import { Itodo } from '../types/Itodo';

interface Istate {
  todos: Itodo[];
}

const INITIAL_STATE: Istate = {
  todos: [],
};
export function todoReducer(state = INITIAL_STATE, action: TodoActionsType) {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, todos: action.todos };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.todo] };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.todoId),
      };
    case UPDATE_TODO:
      const todos = state.todos.map((todo) =>
        todo._id === action.todo!._id ? action.todo : todo
      );
      return { ...state, todos };
    default:
      return state;
  }
}
