import {addPostApi, loginPost} from "../../core/api";
import {addPostFailure, addPostSuccess} from "../actions/posts.actions";
import {all, put, takeLatest} from "@redux-saga/core/effects";
import {loginFailure, loginSuccess} from "../actions/auth.actions";


function* loginGen(action) {
    try {
        const response = yield loginPost(action.payload);
        const data = yield response.data;

        yield put(loginSuccess(data))
    } catch (e) {
        console.log('error', e);
        loginFailure(e)
    }
}

export default function* authSaga() {
    yield all([
        yield takeLatest('LOGIN_PENDING', loginGen),
    ]);
}