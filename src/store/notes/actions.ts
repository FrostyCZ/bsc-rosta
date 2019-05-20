import { action } from 'typesafe-actions';
import { NotesActionTypes, Note } from './types';

export const fetchAllRequest = () => action(NotesActionTypes.FETCH_ALL_REQUEST);
export const fetchAllSuccess = (data: Note[]) =>
  action(NotesActionTypes.FETCH_ALL_SUCCESS, data);
export const fetchAllError = (message: string) =>
  action(NotesActionTypes.FETCH_ALL_ERROR, message);

export const fetchDetailRequest = (id: number) =>
  action(NotesActionTypes.FETCH_DETAIL_REQUEST, id);
export const fetchDetailSuccess = (note: Note) =>
  action(NotesActionTypes.FETCH_DETAIL_SUCCESS, note);
export const fetchDetailError = (message: string) =>
  action(NotesActionTypes.FETCH_DETAIL_ERROR, message);

export const addRequest = (title: string) =>
  action(NotesActionTypes.ADD_REQUEST, title);
export const addSuccess = (data: Note) =>
  action(NotesActionTypes.ADD_SUCCESS, data);
export const addError = (message: string) =>
  action(NotesActionTypes.ADD_ERROR, message);

export const editRequest = (note: Note) =>
  action(NotesActionTypes.EDIT_REQUEST, note);
export const editSuccess = (note: Note) =>
  action(NotesActionTypes.EDIT_SUCCESS, note);
export const editError = (message: string) =>
  action(NotesActionTypes.EDIT_ERROR, message);

export const deleteRequest = (id: number) =>
  action(NotesActionTypes.DELETE_REQUEST, id);
export const deleteSuccess = (id: number) =>
  action(NotesActionTypes.DELETE_SUCCESS, id);
export const deleteError = (message: string) =>
  action(NotesActionTypes.DELETE_ERROR, message);

export const dismissStatus = () => action(NotesActionTypes.DISMISS_STATUS);
