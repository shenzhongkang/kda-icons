import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Icon } from '../.';

const App = () => {
  return (
    <div>
      <Icon name="account_circle" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
