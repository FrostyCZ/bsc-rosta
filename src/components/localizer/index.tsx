import React from 'react';
import { addLocaleData, IntlProvider } from 'react-intl';
import csLocale from 'react-intl/locale-data/cs';
import enLocale from 'react-intl/locale-data/en';
import { connect } from 'react-redux';
import csDictionary from '../../translations/cs.json';
import enDictionary from '../../translations/en.json';
import { LocaleKeys, LocaleSetup, LocalizerProps } from './interfaces';
import { AppState } from '../../store';

const localeSetups: { [key in LocaleKeys]: LocaleSetup } = {
  en: {
    messages: enDictionary,
  },
  cs: {
    messages: csDictionary,
  },
};

addLocaleData([...enLocale, ...csLocale]);

const Localizer: React.FC<LocalizerProps> = ({ locale, children }) => {
  const localeSetup = localeSetups[locale];
  return (
    <IntlProvider
      locale={locale}
      messages={localeSetup.messages}
      textComponent={React.Fragment}
    >
      {children}
    </IntlProvider>
  );
};

const mapStateToProps = ({ settings }: AppState) => ({
  locale: settings.locale,
});

export default connect(mapStateToProps)(Localizer);
