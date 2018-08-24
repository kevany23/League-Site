import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from '../reducers/mainReducer';

// you can add parameter to configureStore() for initial state

const initialState = {posts:["post1", "hello"], isLoggedIn: false};

export default function configureStore() {
 return createStore(
  mainReducer,
  initialState,
   applyMiddleware(thunk),
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
}