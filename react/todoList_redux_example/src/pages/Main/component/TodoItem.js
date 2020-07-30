import React from 'react';
import './TodoItem.css';
const TodoItem = (props) => {
  const { findAllTodo, removeTodo, modifyTodo } = props;
  const { text, checked, id, onToggle, onRemove } = props;
  const handleModifyTodo = async (id, checked) => {
    const body = {
      id: id,
      state: !checked,
    };
    await modifyTodo(body);
    await findAllTodo();
  };
  const handleRemove = async (id) => {
    await removeTodo(id);
    await findAllTodo();
  };
  return (
    <div className="todo-item" onClick={() => handleModifyTodo(id, checked)}>
      <div
        className="remove"
        onClick={(e) => {
          e.stopPropagation(); // onToggle 이 실행되지 않도록 함
          handleRemove(id);
        }}
      >
        &times;
      </div>
      <div className={`todo-text ${checked && 'checked'}`}>
        <div>{text}</div>
      </div>
      {checked && <div className="check-mark">✓</div>}
    </div>
  );
};

export default TodoItem;
