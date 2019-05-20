export type Locales = {
  cs: string;
  en: string;
};

export type LocaleKeys = keyof Locales;

export interface LocaleSetup {
  messages: object;
}

export interface LocalizerProps {
  locale: LocaleKeys;
}
