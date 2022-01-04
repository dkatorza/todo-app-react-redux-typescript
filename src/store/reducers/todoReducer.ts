import { TodoActionsType, ActionType } from '../actions/todoActionsTypes';
import { Itodo } from '../types/Itodo';

interface Istate {
  todos: Itodo[];
}

const INITIAL_STATE: Istate = {
  todos: [],
};
export function todoReducer(state = INITIAL_STATE, action: TodoActionsType) {
  switch (action.type) {
    case ActionType.SET_TODOS:
      return { ...state, todos: action.todos };
    case ActionType.ADD_TODO:
      return { ...state, todos: [...state.todos, action.todo] };
    case ActionType.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.todoId),
      };
    case ActionType.UPDATE_TODO:
      const todos = state.todos.map((todo) =>
        todo._id === action.todo!._id ? action.todo : todo
      );
      return { ...state, todos };
    default:
      return state;
  }
}
