import React from 'react';
import TodoItem from './TodoItem';

const TodoItemList = (props) => {
  const { todoList } = props;
  return (
    <div style={{ width: '100%', height: '100%', overflow: 'none' }}>
      {todoList.length !== 0 ? (
        todoList.map((element, id) => (
          <TodoItem
            {...props}
            key={id}
            id={element.id}
            text={element.title}
            checked={element.state}
          />
        ))
      ) : (
        <div>오늘 할일을 입력해주세요</div>
      )}
    </div>
  );
};

export default TodoItemList;
TodoItemList.defaultProps = {
  todoList: [],
};
