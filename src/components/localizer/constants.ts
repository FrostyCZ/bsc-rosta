import { LocaleKeys } from './interfaces';

export const DEFAULT_LOCALE: LocaleKeys = 'en';
export const LOCALES: { [key in LocaleKeys]: string } = {
  en: 'English',
  cs: 'Česky',
};
