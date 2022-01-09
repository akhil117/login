import { connect } from 'react-redux';
import * as action from '../store/actions/index';
import Login from '../components/LoginComponent';

const MapStateToProps=(state)=>{
    return{
        token: state.LoginReducer.token,
        message: state.LoginReducer.message,
        success: state.LoginReducer.success
    }
};


const mapDispatchToProps = (dispatch)=>{
    return{
        validate : (userName, password) => dispatch(action.validate(userName,password))
    }
}



export default connect(
    MapStateToProps,
    mapDispatchToProps
  )(Login);