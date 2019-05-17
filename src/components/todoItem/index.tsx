import * as React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import { Wrapper } from './styles';

interface TodoItemProps {
  value: string;
}

export const TodoItem: React.FC<TodoItemProps> = ({ value }) => (
  <Wrapper>
    <FormGroup check>
      <Label check>
        <Input type="checkbox" /> {value}
      </Label>
    </FormGroup>
  </Wrapper>
);
