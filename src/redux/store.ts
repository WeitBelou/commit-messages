import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import rootReducer from './reducers';
import { initialState } from './state';

// pass an optional param to rehydrate state on app start
const store = createStore(
  rootReducer, initialState,
  applyMiddleware(logger)
);

// export store singleton instance
export default store;