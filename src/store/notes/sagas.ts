import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { NotesActionTypes } from './types';
import {
  addRequest,
  addSuccess,
  addError,
  editRequest,
  editError,
  editSuccess,
  fetchAllError,
  fetchAllSuccess,
  deleteRequest,
  deleteError,
  deleteSuccess,
  fetchDetailRequest,
  fetchDetailError,
  fetchDetailSuccess,
} from './actions';
import { callApi } from '../../utils/api';

const API_ENDPOINT = 'http://localhost:3001';

function* handleFetchAll() {
  try {
    const res = yield call(callApi, 'get', API_ENDPOINT, '/notes');
    if (res.error) {
      yield put(fetchAllError(res.error));
    } else {
      yield put(fetchAllSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchAllError(err.stack!));
    } else {
      yield put(fetchAllError('An unknown error occured.'));
    }
  }
}

function* handleFetchDetail(action: ReturnType<typeof fetchDetailRequest>) {
  try {
    const res = yield call(
      callApi,
      'get',
      API_ENDPOINT,
      `/notes/${action.payload}`
    );
    if (res.error) {
      yield put(fetchDetailError(res.error));
    } else {
      yield put(fetchDetailSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchDetailError(err.stack!));
    } else {
      yield put(fetchDetailError('An unknown error occured.'));
    }
  }
}

function* handleAdd(action: ReturnType<typeof addRequest>) {
  try {
    const res = yield call(callApi, 'post', API_ENDPOINT, `/notes`, {
      title: action.payload,
    });
    if (res.error) {
      yield put(addError(res.error));
    } else {
      yield put(addSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(addError(err.stack!));
    } else {
      yield put(addError('An unknown error occured.'));
    }
  }
}

function* handleEdit(action: ReturnType<typeof editRequest>) {
  try {
    const res = yield call(
      callApi,
      'put',
      API_ENDPOINT,
      `/notes/${action.payload.id}`,
      {
        title: action.payload.title,
      }
    );
    if (res.error) {
      yield put(editError(res.error));
    } else {
      yield put(editSuccess(res));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(editError(err.stack!));
    } else {
      yield put(editError('An unknown error occured.'));
    }
  }
}

function* handleDelete(action: ReturnType<typeof deleteRequest>) {
  try {
    const res = yield call(
      callApi,
      'delete',
      API_ENDPOINT,
      `/notes/${action.payload}`
    );
    if (res.error) {
      yield put(deleteError(res.error));
    } else {
      yield put(deleteSuccess(action.payload));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(deleteError(err.stack!));
    } else {
      yield put(deleteError('An unknown error occured.'));
    }
  }
}

function* watchFetchAllRequest() {
  yield takeEvery(NotesActionTypes.FETCH_ALL_REQUEST, handleFetchAll);
}

function* watchFetchDetailRequest() {
  yield takeEvery(NotesActionTypes.FETCH_DETAIL_REQUEST, handleFetchDetail);
}

function* watchAddRequest() {
  yield takeEvery(NotesActionTypes.ADD_REQUEST, handleAdd);
}

function* watchEditRequest() {
  yield takeEvery(NotesActionTypes.EDIT_REQUEST, handleEdit);
}

function* watchDeleteRequest() {
  yield takeEvery(NotesActionTypes.DELETE_REQUEST, handleDelete);
}

function* notesSaga() {
  yield all([
    fork(watchFetchAllRequest),
    fork(watchFetchDetailRequest),
    fork(watchAddRequest),
    fork(watchEditRequest),
    fork(watchDeleteRequest),
  ]);
}

export default notesSaga;
