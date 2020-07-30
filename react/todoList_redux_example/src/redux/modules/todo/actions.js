/**
 * @NOTE Client Action
 * @SINCE 2019-12-31 11:15:20
 * @AUTHOR OngDV
 */
import { todoAPI } from '../../../api';

export const FETCH_TODO_ALL = 'todo/FETCH_TODO_ALL';
export const REGISTER_TODO = 'todo/REGISTER_TODO';
export const MODIFY_TODO = 'todo/MODIFY_TODO';
export const REMOVE_TODO = 'todo/REMOVE_TODO';
export const actionCreators = {
  fetchTodoList: () => async (dispatch) => {
    try {
      const response = await todoAPI.findAllTodo();
      if (response === false) {
        return false;
      } else {
        console.log(response);
        dispatch({ type: FETCH_TODO_ALL, payload: response });
        return true;
      }
    } catch (error) {
      //console.log(error);
      return false;
    }
  },
  registerTodo: (todo) => async (dispatch) => {
    try {
      const response = await todoAPI.registerTodo(todo);
      if (response === 1) {
        return false;
      } else {
        dispatch({ type: REGISTER_TODO, payload: response });
        return true;
      }
    } catch (error) {
      console.log('registerTodo Error : ', error);
      return false;
    }
  },
  modifyTodo: (todo) => async (dispatch) => {
    try {
      const response = await todoAPI.modifyTodo(todo);
      if (response === 1) {
        return false;
      } else {
        dispatch({ type: MODIFY_TODO, payload: response });
        return false;
      }
    } catch (error) {
      console.log('modifyTodo Error : ', error);
      return false;
    }
  },
  removeTodo: (id) => async (dispatch) => {
    try {
      const response = await todoAPI.removeTodo(id);
      if (response === 1) {
        return false;
      } else {
        dispatch({ type: REMOVE_TODO, payload: response });
        return true;
      }
    } catch (error) {
      console.log('removeTodo Error : ', error);
      return false;
    }
  },
};
