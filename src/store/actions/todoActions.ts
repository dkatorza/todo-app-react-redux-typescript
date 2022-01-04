import { todoService } from '../../services/todo.service';
import { Dispatch } from 'redux';

export function getTodos(filterBy) {
  return async (dispatch) => {
    try {
      const todos = await todoService.query(filterBy);
      dispatch({
        type: 'SET_TODOS',
        todos,
      });
    } catch (err) {
      console.log('Cannot load todos', err);
    }
  };
}

export function onRemoveTodo(todoId) {
  return async (dispatch) => {
    try {
      await todoService.remove(todoId);
      dispatch({
        type: 'REMOVE_TODO',
        todoId,
      });
    } catch (err) {
      console.log('Cannot remove todo', err);
    }
  };
}

export function onAddTodo(todo) {
  return async (dispatch) => {
    try {
      const savedTodo = await todoService.save(todo);
      dispatch({
        type: 'ADD_TODO',
        todo: savedTodo,
      });
    } catch (err) {
      console.log('Cannot add todo', err);
    }
  };
}

export function onEditTodo(currTodo) {
  return async (dispatch) => {
    try {
      const updatedTodo = await todoService.save(currTodo);
      dispatch({
        type: 'UPDATE_TODO',
        todo: updatedTodo,
      });
    } catch (err) {
      console.log('Cannot save todo', err);
    }
  };
}
