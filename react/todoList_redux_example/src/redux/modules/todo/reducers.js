import { FETCH_TODO_ALL } from './actions';

const initialState = {
  todoList: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TODO_ALL:
      return { ...state, todoList: payload };
    default:
      return state;
  }
};
