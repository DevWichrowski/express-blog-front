import {all} from "@redux-saga/core/effects";
import postsSaga from "./posts.saga";

function* rootSaga() {
    yield all([
        postsSaga(),
    ]);
}

export default rootSaga;