import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from '../reducers/mainReducer';

// you can add parameter to configureStore() for initial state

export default function configureStore() {
 return createStore(
  mainReducer,
   applyMiddleware(thunk)
 );
}