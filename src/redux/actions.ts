import {
  ADD_NOTE,
  AddNoteAction,
  DELETE_NOTE,
  FETCH_NOTES,
  FetchNotesAction,
} from './actionTypes';

let nextNoteId = 0;

export const addNote = (title: string): AddNoteAction => ({
  type: ADD_NOTE,
  payload: {
    id: ++nextNoteId,
    title,
  },
});

export const deleteNote = (id: number) => ({
  type: DELETE_NOTE,
  payload: { id },
});

export const fetchNotes = () => {
  return (dispatch: any) =>
    fetch('http://private-9aad-note10.apiary-mock.com/notes')
      .then(response => response.json())
      .then(json => dispatch({ type: FETCH_NOTES, payload: json }))
      .catch();
};
