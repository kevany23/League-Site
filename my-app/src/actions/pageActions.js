import * as types from "./actionTypes";

export function addPost(post) {
    return dispatch => {dispatch({
        type: types.ADD_POST,
        payload:post
    }
    )};
};