import { combineReducers } from 'redux';
import * as types from '../actions/actionTypes.js';

//import simpleAction from "../actions/simpleAction";

function reduce(state={}, action) {
    switch(action.type){
        case types.SIMPLE_ACTION:
            return {...state, payload: action.payload};
        case types.ADD_POST:
            let newState = Object.assign(state);
            newState.posts.push(action.payload);
            return newState;
        default:
            return state;
    }
}

export default reduce;