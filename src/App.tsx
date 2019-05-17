import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import { TodoList } from './pages/todoList';
import { TodoDetail } from './pages/todoDetail';
import { Route, Switch } from 'react-router';

const App: React.FC = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route path="/:id" component={TodoDetail} />
      </Switch>
    </Container>
  );
};

export default App;
