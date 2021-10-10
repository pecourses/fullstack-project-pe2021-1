import { put } from 'redux-saga/effects';
import {
  createUserError,
  createUserRequest,
  createUserSuccess,
  getUsersError,
  getUsersRequest,
  getUsersSuccess,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserError,
} from '../actions';
import * as API from '../api';

export function * getUsersSaga () {
  // отправить экшн ACTION_TYPES.GET_USERS_REQUEST
  yield put(getUsersRequest()); // отправка екшна
  // yield put({ type: ACTION_TYPES.GET_USERS_REQUEST }); // отправка екшна

  try {
    //   юзеры = загрузка()
    const { data: users } = yield API.getUsers();
    //   отправить экшн  ACTION_TYPES.GET_USERS_SUCCESS

    yield put(getUsersSuccess(users));
    // yield put({
    //   type: ACTION_TYPES.GET_USERS_SUCCESS,
    //   users: users,
    // });
  } catch (e) {
    //    отправить экшн  ACTION_TYPES.GET_USERS_ERROR
    yield put(getUsersError(e));
  }
}

export function * createUserSaga (action) {
  const { user } = action;

  yield put(createUserRequest());
  try {
    const { data: newUser } = yield API.createUser(user);
    yield put(createUserSuccess(newUser));
  } catch (e) {
    yield put(createUserError(e));
  }
}

export function * deleteUserSaga (action) {
  const { id } = action;
  yield put(deleteUserRequest());
  try {
    const { data: deletedUser } = yield API.deleteUser(id);
    yield put(deleteUserSuccess(deletedUser));
  } catch (e) {
    yield put(deleteUserError(e));
  }
}
