import AppContainer from './AppContainer';
import { connect } from 'react-redux';
import { actionCreators as TodoActions } from '../redux/modules/todo/actions';
export default connect(
  ({ todo }) => ({
    todoList: todo.todoList,
  }),
  (dispatch) => ({
    findAllTodo: () => dispatch(TodoActions.fetchTodoList()),
  })
)(AppContainer);
