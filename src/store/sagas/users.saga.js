import {getMyProfileApi} from "../../core/api";
import {all, put, takeLatest} from "@redux-saga/core/effects";
import {getMyProfileFailure, getMyProfileSuccess} from "../actions/users.actions";


function* getMyProfileGen(action) {
    try {
        const response = yield getMyProfileApi(action.payload);
        const data = yield response.data;

        yield put(getMyProfileSuccess(data))
    } catch (e) {
        console.log('error', e);
        getMyProfileFailure(e)
    }
}

export default function* usersSaga() {
    yield all([
        yield takeLatest('GET_MY_PROFILE_PENDING', getMyProfileGen),
    ]);
}