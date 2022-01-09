import * as actionTypes from './ActionTypes';

export const validate = (userName, password) => {
    console.log('entered er');
    return {
        type: actionTypes.LOGIN_VALIDATION,
        userName,
        password
    }
}

export const IsLoginSuccess = (IsSuccess,response) =>{
    console.log("response", response);
    return{
        type: IsSuccess? actionTypes.LOGIN_SUCCESS :actionTypes.LOGIN_FAIL,
        ...response
    }
}