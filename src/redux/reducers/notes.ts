import {
  ADD_NOTE,
  DELETE_NOTE,
  FETCH_NOTES,
  NotesActionTypes,
} from '../actionTypes';
import { Note } from '../../model/note';

export interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: [],
};

export const notesReducer = (
  state = initialState,
  action: NotesActionTypes
): NotesState => {
  switch (action.type) {
    case ADD_NOTE: {
      const { id, title } = action.payload;

      return {
        ...state,
        notes: [...state.notes, { id, title, completed: false }],
      };
    }
    // case DELETE_NOTE: {
    //   const { id } = action.payload;
    //   console.log('toggle', id);
    //   return {
    //     ...state,
    //   };
    // }
    case FETCH_NOTES: {
      return { ...state, notes: action.payload };
    }
    default:
      return state;
  }
};
