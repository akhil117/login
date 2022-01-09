import {
    put,
    takeEvery,
    all,
    call,
} from 'redux-saga/effects';

import * as actions from '../actions/index';
import _ from 'lodash';
import axios from 'axios';

export function* IsValid(action) {
    try {
        let body = {
            ...action
        };
        console.log('body',body);
        const response = yield axios.post('https://localhost:44346/api/Auth/login', body);
        console.log("sdljsd",response.data)
        yield put(actions.IsLoginSuccess(true,response.data));

    } catch (error) {
        yield put(actions.IsLoginSuccess(false,""));
    }
}