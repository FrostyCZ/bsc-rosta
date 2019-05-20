import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import {
  Alert,
  Button,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
} from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { AppState } from '../store';
import {
  dismissStatus,
  editRequest,
  fetchDetailRequest,
} from '../store/notes/actions';
import { Note, NotesStatusTypes } from '../store/notes/types';
import { messages } from './messages';

interface NoteEditProps extends RouteComponentProps<any> {
  note: Note | undefined;
  status: NotesStatusTypes | undefined;
  fetchDetailRequest: typeof fetchDetailRequest;
  editRequest: typeof editRequest;
  dismissStatus: typeof dismissStatus;
}

const NoteEdit: React.FC<NoteEditProps> = ({
  note,
  status,
  editRequest,
  fetchDetailRequest,
  dismissStatus,
  match: { params },
}) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetchDetailRequest(params.id);
  }, [fetchDetailRequest, params.id]);

  useEffect(() => {
    if (note) {
      setTitle(note.title);
    }
  }, [note]);

  const handleEditNote = () => {
    if (note) {
      editRequest({ id: note.id, title });
    }
  };

  if (!note) {
    return null;
  }

  return (
    <Row className="mb-3">
      <Col>
        {status && status === NotesStatusTypes.EDIT_DONE && (
          <Alert color="success" toggle={() => dismissStatus()}>
            <FormattedMessage {...messages.alertUpdateDone} />
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
            <Button color="primary" onClick={handleEditNote}>
              <FormattedMessage {...messages.update} />
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ notes }: AppState) => ({
  note: notes.note,
  status: notes.status,
});

const mapDispatchToProps = {
  editRequest,
  fetchDetailRequest,
  dismissStatus,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteEdit);
