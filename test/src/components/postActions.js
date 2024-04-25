import {
    POST_CREATE_REQUEST,    
    POST_CREATE_SUCCESS,
    POST_CREATE_FAIL,

} from "../constants/postConstants";

export const postCreate = (post) => async (dispatch, getState) => {
    try{
        dispatch({type: POST_CREATE_REQUEST})
            const res = await fetch('/api/editor/', {
                method: 'POST',
                body: JSON.stringify(post),
            });
            const data = await res.json();
            dispatch({
                type: POST_CREATE_SUCCESS,
                payload: data,
            });


        
    }
    catch(error){
        dispatch({
            type: POST_CREATE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    }
}