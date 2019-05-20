import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';

import notesSaga from './notes/sagas';
import { notesReducer } from './notes/reducer';
import { settingsReducer } from './settings/reducer';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  notes: notesReducer,
  settings: settingsReducer,
});

export default createStore(rootReducer, applyMiddleware(sagaMiddleware));

export type AppState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([fork(notesSaga)]);
}

sagaMiddleware.run(rootSaga);
