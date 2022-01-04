import { Itodo } from '../types/Itodo';

export const SET_TODOS = 'SET_TODOS';
export const REMOVE_TODO = 'REMOVE_TODO';
export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

interface TodoActions {
  todos?: Itodo[];
  todo?: Itodo;
}

interface SetTodos extends TodoActions {
  type: typeof SET_TODOS;
  todos: Itodo[];
}
interface RemoveTodo extends TodoActions {
  type: typeof REMOVE_TODO;
  todoId: string;
}
interface AddTodo extends TodoActions {
  type: typeof ADD_TODO;
  todo: Itodo;
}
interface UpdateTodo extends TodoActions {
  type: typeof UPDATE_TODO;
  todo: Itodo;
}

export type TodoActionsType = SetTodos | RemoveTodo | AddTodo | UpdateTodo;
