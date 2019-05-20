import * as React from 'react';
import { Button, Card, CardBody, CardFooter, CardTitle } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { Note } from '../../store/notes/types';
import { messages } from './messages';
import { Link } from 'react-router-dom';

interface NoteItemProps {
  note: Note;
  onDelete: (id: number) => void;
}

export const NoteItem: React.FC<NoteItemProps> = ({ note, onDelete }) => {
  const handleDelete = () => {
    onDelete(note.id);
  };

  return (
    <Card style={{ height: '100%' }}>
      <CardBody>
        <CardTitle>{note.title}</CardTitle>
      </CardBody>
      <CardFooter>
        <div className="d-flex justify-content-between">
          <Button outline size="sm" color="danger" onClick={handleDelete}>
            <FormattedMessage {...messages.delete} />
          </Button>
          <Link to={`/${note.id}`}>
            <Button size="sm" color="primary">
              <FormattedMessage {...messages.edit} />
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
