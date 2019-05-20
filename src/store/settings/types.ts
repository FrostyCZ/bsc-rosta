import { LocaleKeys } from '../../components/localizer/interfaces';

export enum SettingsActionTypes {
  SET_LOCALE = 'SET_LOCALE',
}

export interface SettingsState {
  readonly locale: LocaleKeys;
}
