import { combineReducers } from 'redux';
import * as types from '../actions/actionTypes.js';

//import simpleAction from "../actions/simpleAction";

function reduce(state={}, action) {
    let newState = {};
    switch(action.type){
        case types.SIMPLE_ACTION:
            return {...state, payload: action.payload};
        case types.ADD_POST:
            newState = Object.assign(state)
            newState.posts.push(action.payload);
            return newState;
        case types.LOGIN:
            console.log("here");
            newState = Object.assign(state);
            newState.isLoggedIn = true;
            newState.userName = action.payload.username;
            newState.uid = action.payload.uid;
            return newState;
        default:
            return state;
    }
}

export default reduce;