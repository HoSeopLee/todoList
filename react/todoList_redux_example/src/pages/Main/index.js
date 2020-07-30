import MainContainer from './MainContainer';
import { connect } from 'react-redux';
import { actionCreators as todoActions } from '../../redux/modules/todo/actions';
export default connect(
  ({ todo }) => ({
    todoList: todo.todoList,
  }),
  (dispatch) => ({
    findAllTodo: () => dispatch(todoActions.fetchTodoList()),
    registerTodo: (todo) => dispatch(todoActions.registerTodo(todo)),
    modifyTodo: (todo) => dispatch(todoActions.modifyTodo(todo)),
    removeTodo: (id) => dispatch(todoActions.removeTodo(id)),
  })
)(MainContainer);
