import { defineMessages, Messages } from 'react-intl';

const messageNames = {
  add: {
    id: 'add',
    defaultMessage: 'Add',
  },
  update: {
    id: 'update',
    defaultMessage: 'Update',
  },
  alertAddDone: {
    id: 'alert.add.done',
    defaultMessage: 'Note has been added',
  },
  alertDeleteDone: {
    id: 'alert.delete.done',
    defaultMessage: 'Note has been deleted',
  },
  alertUpdateDone: {
    id: 'alert.update.done',
    defaultMessage: 'Note has been updated',
  },
};

type Names = keyof typeof messageNames;

export const messages: Messages<Names> = defineMessages({
  ...messageNames,
});
