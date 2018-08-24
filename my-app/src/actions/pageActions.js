import * as types from "./actionTypes";
import Login from "../components/login/login";

export function addPost(post) {
    return dispatch => {dispatch({
        type: types.ADD_POST,
        payload:post
    }
    )};
};

export function login(info) {
    return dispatch => {dispatch({
        type:types.LOGIN,
        payload:info
    }
    )};
}