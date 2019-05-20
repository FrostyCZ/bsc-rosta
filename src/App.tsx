import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import NoteList from './pages/noteList';
import NoteEdit from './pages/noteEdit';
import { Route, Switch } from 'react-router';
import { AppBar } from './components/appBar';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import Localizer from './components/localizer';
import { Provider } from 'react-redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Localizer>
        <BrowserRouter>
          <Container>
            <AppBar />
            <Switch>
              <Route exact path="/" component={NoteList} />
              <Route path="/:id" component={NoteEdit} />
            </Switch>
          </Container>
        </BrowserRouter>
      </Localizer>
    </Provider>
  );
};

export default App;
