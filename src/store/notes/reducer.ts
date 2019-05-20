import { Reducer } from 'redux';
import { NotesState, NotesActionTypes, NotesStatusTypes } from './types';

export const initialState: NotesState = {
  data: [],
  note: undefined,
  errors: undefined,
  status: undefined,
};

const reducer: Reducer<NotesState> = (state = initialState, action) => {
  switch (action.type) {
    case NotesActionTypes.FETCH_ALL_REQUEST: {
      return { ...state, status: NotesStatusTypes.FETCH_ALL_START };
    }
    case NotesActionTypes.FETCH_ALL_SUCCESS: {
      return {
        ...state,
        status: NotesStatusTypes.FETCH_ALL_DONE,
        data: action.payload,
      };
    }
    case NotesActionTypes.FETCH_ALL_ERROR: {
      return { ...state, status: undefined, errors: action.payload };
    }
    case NotesActionTypes.FETCH_DETAIL_REQUEST: {
      return {
        ...state,
        status: NotesStatusTypes.FETCH_DETAIL_START,
        note: undefined,
      };
    }
    case NotesActionTypes.FETCH_DETAIL_SUCCESS: {
      return {
        ...state,
        status: NotesStatusTypes.FETCH_DETAIL_DONE,
        note: action.payload,
      };
    }
    case NotesActionTypes.FETCH_DETAIL_ERROR: {
      return {
        ...state,
        status: undefined,
        errors: action.payload,
        note: undefined,
      };
    }
    case NotesActionTypes.ADD_REQUEST: {
      return { ...state, status: NotesStatusTypes.ADD_START };
    }
    case NotesActionTypes.ADD_SUCCESS: {
      const { id, title } = action.payload;
      return {
        ...state,
        status: NotesStatusTypes.ADD_DONE,
        data: [...state.data, { id, title, completed: false }],
      };
    }
    case NotesActionTypes.ADD_ERROR: {
      return { ...state, status: undefined, errors: action.payload };
    }
    case NotesActionTypes.EDIT_REQUEST: {
      return { ...state, status: NotesStatusTypes.EDIT_START };
    }
    case NotesActionTypes.EDIT_SUCCESS: {
      return {
        ...state,
        status: NotesStatusTypes.EDIT_DONE,
        note: action.payload,
      };
    }
    case NotesActionTypes.EDIT_ERROR: {
      return { ...state, status: undefined, errors: action.payload };
    }
    case NotesActionTypes.DELETE_REQUEST: {
      return { ...state, status: NotesStatusTypes.DELETE_START };
    }
    case NotesActionTypes.DELETE_SUCCESS: {
      return {
        ...state,
        status: NotesStatusTypes.DELETE_DONE,
        data: state.data.filter(note => note.id !== action.payload),
      };
    }
    case NotesActionTypes.DELETE_ERROR: {
      return { ...state, status: undefined, errors: action.payload };
    }
    case NotesActionTypes.DISMISS_STATUS: {
      return { ...state, status: undefined };
    }
    default: {
      return state;
    }
  }
};

export { reducer as notesReducer };
