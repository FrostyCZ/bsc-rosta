import { defineMessages, Messages } from 'react-intl';

const messageNames = {
  edit: {
    id: 'note.edit',
    defaultMessage: 'Edit',
  },
  delete: {
    id: 'note.delete',
    defaultMessage: 'Delete',
  },
};

type Names = keyof typeof messageNames;

export const messages: Messages<Names> = defineMessages({
  ...messageNames,
});
