import { action } from 'typesafe-actions';
import { SettingsActionTypes } from './types';
import { LocaleKeys } from '../../components/localizer/interfaces';

export const setLocale = (locale: LocaleKeys) =>
  action(SettingsActionTypes.SET_LOCALE, locale);
