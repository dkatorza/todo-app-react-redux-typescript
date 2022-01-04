import { Itodo } from '../types/Itodo';

export enum ActionType {
  SET_TODOS = 'SET_TODOS',
  REMOVE_TODO = 'REMOVE_TODO',
  ADD_TODO = 'ADD_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
}

interface SetTodos {
  type: ActionType.SET_TODOS;
  todos: Itodo[];
}
interface RemoveTodo {
  type: ActionType.REMOVE_TODO;
  todoId: string;
}
interface AddTodo {
  type: ActionType.ADD_TODO;
  todo: Itodo;
}
interface UpdateTodo {
  type: ActionType.UPDATE_TODO;
  todo: Itodo;
}

export type TodoActionsType = SetTodos | RemoveTodo | AddTodo | UpdateTodo;
