import {all, put, takeLatest} from 'redux-saga/effects';
import {
    addPostFailure,
    addPostSuccess,
    deletePostFailure,
    deletePostSuccess,
    getPostsFailure,
    getPostsSuccess,
    getSinglePostFailure,
    getSinglePostSuccess
} from "../actions/posts.actions";

import {addPostApi, deletePostApi, getAllPosts, getSinglePost} from "../../core/api";

function* getPostsGen(action) {
    try {
        const payload = yield getAllPosts();

        yield put(getPostsSuccess(payload.data));
    } catch (e) {
        console.log('error', e);
        yield put(getPostsFailure());
    }

}

function* addPostGen(action) {
    try {
        const response = yield addPostApi(action.payload);
        const data = yield response.data;


        yield put(addPostSuccess(action.payload))

    } catch (e) {
        console.log('error', e);
        addPostFailure(e)
    }
}

function* deletePostGen(action) {
    try {
        const response = yield deletePostApi(action.payload);
        const data = yield response.data;


        yield put(deletePostSuccess(action.payload))

    } catch (e) {
        console.log('error', e);
        deletePostFailure(e)
    }
}

function* getSinglePostGen(action) {
    try {
        const response = yield getSinglePost(action.payload);
        const data = yield response.data;

        yield put(getSinglePostSuccess(data))

    } catch (e) {
        console.log('error', e);
        getSinglePostFailure(e)
    }
}


export default function* postsSaga() {
    yield all([
        yield takeLatest('GET_POSTS_PENDING', getPostsGen),
        yield takeLatest('ADD_POSTS_PENDING', addPostGen),
        yield takeLatest('DELETE_POST_PENDING', deletePostGen),
        yield takeLatest('GET_SINGLE_POST_PENDING', getSinglePostGen)
    ]);
}