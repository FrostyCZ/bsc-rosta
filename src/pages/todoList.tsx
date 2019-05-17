import React from 'react';
import {
  Row,
  Col,
  Input,
  InputGroupAddon,
  Button,
  InputGroup,
} from 'reactstrap';
import { TodoItem } from '../components/todoItem';

export const TodoList = () => {
  return (
    <>
      <Row>
        <Col>
          <h2 className="text-center">Todo List</h2>
          <InputGroup>
            <Input />
            <InputGroupAddon addonType="append">
              <Button color="primary">Add</Button>
            </InputGroupAddon>
          </InputGroup>
          <TodoItem value="Check me out" />
          <TodoItem value="Check me out" />
          <TodoItem value="Check me out" />
          <TodoItem value="Check me out" />
        </Col>
      </Row>
    </>
  );
};
