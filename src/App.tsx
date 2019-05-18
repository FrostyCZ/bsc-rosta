import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import NoteList from './pages/noteList';
import { NoteDetail } from './pages/noteDetail';
import { Route, Switch } from 'react-router';

const App: React.FC = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={NoteList} />
        <Route path="/:id" component={NoteDetail} />
      </Switch>
    </Container>
  );
};

export default App;
