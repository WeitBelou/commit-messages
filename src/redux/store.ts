import { createStore } from 'redux';
import rootReducer from './reducers';
import { initialState } from './state';

// pass an optional param to rehydrate state on app start
const store = createStore(rootReducer, initialState);

// export store singleton instance
export default store;