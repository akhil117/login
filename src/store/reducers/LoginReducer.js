import * as actionTypes from '../actions/ActionTypes';


const initialState ={
    token:"",
    success:"",
    message:""
}

const LoginReducer = (state =initialState, action) =>{
    console.log('action', action);
    switch(action.type){
        case actionTypes.LOGIN_SUCCESS:
            console.log('reducer')
            return{
                ...initialState,
                token: action.data,
                success: action.success,
                message: action.message
            }
        case actionTypes.LOGIN_FAIL:
            return{
                ...initialState,
                ...state,
            }        
        default:
            return state;
    }

}

export default LoginReducer;