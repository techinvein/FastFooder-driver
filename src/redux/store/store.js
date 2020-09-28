import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

// Note: this API requires redux@>=3.1.0
export default store = createStore(rootReducer, applyMiddleware(thunk));