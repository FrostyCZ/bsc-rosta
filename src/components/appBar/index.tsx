import * as React from 'react';
import { Navbar } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import LangSwitch from '../localeSwitch';
import { messages } from './messages';
import { Link } from 'react-router-dom';

export const AppBar: React.FC = () => (
  <Navbar color="light" light expand="md" className="my-3">
    <Link to="/" className="navbar-brand">
      <FormattedMessage {...messages.title} />
    </Link>
    <LangSwitch />
  </Navbar>
);
