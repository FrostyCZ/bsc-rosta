import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { notesReducer } from './reducers/notes';

const rootReducer = combineReducers({ notes: notesReducer });

export default createStore(rootReducer, applyMiddleware(thunk));
export type AppState = ReturnType<typeof rootReducer>;
