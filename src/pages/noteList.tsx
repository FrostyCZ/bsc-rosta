import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  Input,
  InputGroupAddon,
  Button,
  InputGroup,
} from 'reactstrap';
import { addNote, fetchNotes } from '../redux/actions';
import { AppState } from '../redux/store';
import { NoteItem } from '../components/noteItem';
import { Note } from '../model/note';

interface NoteListProps {
  notes: Note[];
  addNote: (name: string) => void;
  fetchNotes: () => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, addNote, fetchNotes }) => {
  const [name, setName] = useState('');

  const handleAddNote = () => {
    addNote(name);
    setName('');
  };

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  console.log(notes);

  return (
    <>
      <Row>
        <Col>
          <h2 className="text-center">Note List</h2>
          <InputGroup>
            <Input
              value={name}
              onChange={(e: any) => setName(e.target.value)}
            />
            <InputGroupAddon addonType="append">
              <Button color="primary" onClick={handleAddNote}>
                Add
              </Button>
            </InputGroupAddon>
          </InputGroup>
          <br />
          <Row>
            {notes.map(note => (
              <Col xs={3} key={note.id}>
                <NoteItem title={note.title} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default connect(
  ({ notes }: AppState) => ({
    notes: notes.notes,
  }),
  { addNote, fetchNotes }
)(NoteList);
