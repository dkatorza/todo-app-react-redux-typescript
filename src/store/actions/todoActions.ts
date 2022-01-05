import { todoService } from '../../services/todo.service';
import { TodoActionsType, ActionType } from './todoActionsTypes';
import { Dispatch } from 'redux';
import { Itodo } from '../types/Itodo';

export function getTodos(filterBy: { title: string; criteria: string }) {
  return async (dispatch: Dispatch<TodoActionsType>) => {
    console.log('ff', filterBy);

    try {
      const todos = await todoService.query(filterBy);
      dispatch({
        type: ActionType.SET_TODOS,
        todos,
      });
    } catch (err) {
      console.log('Cannot load todos', err);
    }
  };
}

export function onRemoveTodo(todoId: string) {
  return async (dispatch: Dispatch<TodoActionsType>) => {
    try {
      await todoService.remove(todoId);
      dispatch({
        type: ActionType.REMOVE_TODO,
        todoId,
      });
    } catch (err) {
      console.log('Cannot remove todo', err);
    }
  };
}

export function onAddTodo(todo: { text: string }) {
  return async (dispatch: Dispatch<TodoActionsType>) => {
    try {
      const savedTodo = await todoService.save(todo);
      dispatch({
        type: ActionType.ADD_TODO,
        todo: savedTodo,
      });
    } catch (err) {
      console.log('Cannot add todo', err);
    }
  };
}

export function onEditTodo(currTodo: Itodo) {
  return async (dispatch: Dispatch<TodoActionsType>) => {
    try {
      const updatedTodo = await todoService.save(currTodo);
      dispatch({
        type: ActionType.UPDATE_TODO,
        todo: updatedTodo,
      });
    } catch (err) {
      console.log('Cannot save todo', err);
    }
  };
}
