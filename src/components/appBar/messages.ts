import { defineMessages, Messages } from 'react-intl';

const messageNames = {
  title: {
    id: 'appbar.title',
    defaultMessage: 'Notes',
  },
};

type Names = keyof typeof messageNames;

export const messages: Messages<Names> = defineMessages({
  ...messageNames,
});
