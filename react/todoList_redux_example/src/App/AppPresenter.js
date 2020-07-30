import React from 'react';
import { ProviderRouter } from '../route';

const AppPresenter = (props) => {
  return (
    <div>
      <ProviderRouter />
      {/* {type === 'ADMIN' ? <MGTRouter /> : <ProviderRouter />} */}
    </div>
  );
};

export default AppPresenter;
