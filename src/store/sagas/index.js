import {
    takeEvery,
    all,
  } from 'redux-saga/effects';

import * as actionTypes from '../actions/ActionTypes';
import {IsValid} from './LoginSaga';

export  function* watchLoginRegistrationCall() {
    yield all([
       takeEvery(actionTypes.LOGIN_VALIDATION, IsValid)
    ]);
  }