import { Reducer } from 'redux';
import { SettingsState, SettingsActionTypes } from './types';
import { DEFAULT_LOCALE } from '../../components/localizer/constants';

export const initialState: SettingsState = {
  locale: DEFAULT_LOCALE,
};

const reducer: Reducer<SettingsState> = (state = initialState, action) => {
  switch (action.type) {
    case SettingsActionTypes.SET_LOCALE: {
      return { ...state, locale: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as settingsReducer };
