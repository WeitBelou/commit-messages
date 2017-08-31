import * as React from 'react';
import { Provider } from 'react-redux';

import VotingContainer from './components/VotingContainer';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <VotingContainer/>
  </Provider>
);

export default App;
