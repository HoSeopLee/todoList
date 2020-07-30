import React, { useEffect } from 'react';
import AppPresenter from './AppPresenter';
import { withRouter } from 'react-router-dom';

const AppContainer = (props) => {
  const { findAllTodo } = props;
  useEffect(() => {
    const getTodo = () => {
      findAllTodo();
    };
    getTodo();
  }, []); //랜더링후 실행
  return <AppPresenter {...props} />;
};

export default withRouter(AppContainer);
