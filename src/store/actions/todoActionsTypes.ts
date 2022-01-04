import { Itodo } from '../types/Itodo';

export const SET_TODOS = 'SET_TODOS';
export const REMOVE_TODO = 'REMOVE_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

interface TodoActions {
  todos: Itodo[];
}

interface SetTodos extends TodoActions {
  type: typeof SET_TODOS;
}
interface RemoveTodo extends TodoActions {
  type: typeof REMOVE_TODO;
}
interface AddTodo extends TodoActions {
  type: typeof ADD_TODO;
}
interface UpdateTodo extends TodoActions {
  type: typeof UPDATE_TODO;
}

export type TodoActionsType = SetTodos | RemoveTodo | AddTodo | UpdateTodo;
