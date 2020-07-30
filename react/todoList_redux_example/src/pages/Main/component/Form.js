import React, { useState } from 'react';
import './Form.css';

const Form = (props) => {
  const { registerTodo, findAllTodo } = props;
  const [title, setTitle] = useState('');
  const handleCreate = async () => {
    const body = {
      title: title,
    };
    if (title === '') {
      console.log('입력해주세요');
      return;
    }
    await registerTodo(body);
    await findAllTodo();
    await setTitle('');
  };
  const handleKeyPress = (e) => {
    // 눌려진 키가 Enter 면 handleCreate 호출
    if (e.key === 'Enter') {
      handleCreate();
    }
  };
  return (
    <div className="form">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <div className="create-button" onClick={handleCreate}>
        추가
      </div>
    </div>
  );
};

export default Form;
