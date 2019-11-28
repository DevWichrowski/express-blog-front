import {all} from "@redux-saga/core/effects";
import postsSaga from "./posts.saga";
import authSaga from "./auth.saga";

function* rootSaga() {
    yield all([
        postsSaga(),
        authSaga(),
    ]);
}

export default rootSaga;