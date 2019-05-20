import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Input,
  InputGroupAddon,
  Button,
  InputGroup,
  Alert,
} from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import {
  fetchAllRequest,
  addRequest,
  deleteRequest,
  dismissStatus,
} from '../store/notes/actions';
import { AppState } from '../store';
import { NoteItem } from '../components/noteItem';
import { Note, NotesStatusTypes } from '../store/notes/types';
import { messages } from './messages';

interface NoteListProps {
  status: NotesStatusTypes | undefined;
  data: Note[];
  errors?: string;
  addRequest: typeof addRequest;
  fetchAllRequest: typeof fetchAllRequest;
  deleteRequest: typeof deleteRequest;
  dismissStatus: typeof dismissStatus;
}

const NoteList: React.FC<NoteListProps> = ({
  data,
  status,
  addRequest,
  fetchAllRequest,
  deleteRequest,
  dismissStatus,
}) => {
  const [title, setTitle] = useState('');

  const handleAddNote = () => {
    addRequest(title);
    setTitle('');
  };

  const handleDeleteNote = (id: number) => {
    deleteRequest(id);
  };

  useEffect(() => {
    fetchAllRequest();
  }, [fetchAllRequest]);

  if (!data) {
    return null;
  }

  return (
    <>
      <Row className="mb-3">
        <Col>
          {status && status === NotesStatusTypes.ADD_DONE && (
            <Alert color="success" toggle={() => dismissStatus()}>
              <FormattedMessage {...messages.alertAddDone} />
            </Alert>
          )}
          {status && status === NotesStatusTypes.DELETE_DONE && (
            <Alert color="success" toggle={() => dismissStatus()}>
              <FormattedMessage {...messages.alertDeleteDone} />
            </Alert>
          )}

          <InputGroup>
            <Input
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
            />
            <InputGroupAddon addonType="append">
              <Button color="primary" onClick={handleAddNote}>
                <FormattedMessage {...messages.add} />
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        {data.map(note => (
          <Col xs={12} sm={6} md={4} lg={3} key={note.id} className="mb-3">
            <NoteItem note={note} onDelete={handleDeleteNote} />
          </Col>
        ))}
      </Row>
    </>
  );
};

const mapStateToProps = ({ notes }: AppState) => ({
  errors: notes.errors,
  data: notes.data,
  status: notes.status,
});

const mapDispatchToProps = {
  addRequest,
  fetchAllRequest,
  deleteRequest,
  dismissStatus,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList);
