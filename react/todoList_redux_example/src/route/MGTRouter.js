import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Main } from '../pages';

const MGTRouter = () => (
  <Switch>
    <Route exact path="/" component={Main} />
  </Switch>
);

export default MGTRouter;
