import { call, fork, put, takeEvery } from 'redux-saga/effects';

import { getUsersEffect, addUserEffect } from './users-effects'
import { addUser, usersLoaded, UserDataWithId } from './users-slice';

function* getUsersSaga() {
    try {
        const users = yield call(getUsersEffect);
        yield put({
            type: usersLoaded.toString(),
            payload: users.data,
        })

    } catch (e) {
        console.log('error in getUsers saga');
        yield put({
            type: usersLoaded.toString(),
            payload: [],
        });
    }
}

function* addUserSaga(action: { payload: any }) {
    try {
        const newUser = yield call(addUserEffect, action.payload);
        yield getUsersSaga();
    } catch (e) {
        console.log('error in addUser saga');
    }
}

export function* usersSaga() {
    yield fork(getUsersSaga);
    yield takeEvery(addUser, addUserSaga);
}
