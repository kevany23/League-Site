import * as types from "./actionTypes";


const simpleAction = () => dispatch => {
    dispatch({
     type: types.SIMPLE_ACTION,
     payload: 'result_of_simple_action'
    })
   };

export default simpleAction;

