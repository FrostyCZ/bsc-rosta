export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const FETCH_NOTES = 'FETCH_NOTES';

export interface AddNoteAction {
  type: typeof ADD_NOTE;
  payload: {
    id: number;
    title: string;
  };
}

export interface FetchNotesAction {
  type: typeof FETCH_NOTES;
  payload: [];
}

export type NotesActionTypes = AddNoteAction | FetchNotesAction;
