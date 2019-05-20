import * as React from 'react';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  UncontrolledDropdown,
} from 'reactstrap';
import { AppState } from '../../store';
import { setLocale } from '../../store/settings/actions';
import { connect } from 'react-redux';
import { LocaleKeys } from '../localizer/interfaces';
import { LOCALES } from '../localizer/constants';

interface LangSwitchProps {
  locale: LocaleKeys;
  setLocale: typeof setLocale;
}

const LocaleSwitch: React.FC<LangSwitchProps> = ({ locale, setLocale }) => {
  return (
    <Nav className="ml-auto" navbar>
      <UncontrolledDropdown>
        <DropdownToggle caret size="sm">
          {LOCALES[locale]}
        </DropdownToggle>
        <DropdownMenu>
          {Object.keys(LOCALES).map(locale => {
            const localeKey = locale as LocaleKeys;
            return (
              <DropdownItem key={locale} onClick={() => setLocale(localeKey)}>
                {LOCALES[localeKey]}
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  );
};

const mapStateToProps = ({ settings }: AppState) => ({
  locale: settings.locale,
});

const mapDispatchToProps = {
  setLocale,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocaleSwitch);
