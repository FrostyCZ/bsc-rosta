import * as React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

interface NoteItemProps {
  title: string;
}

export const NoteItem: React.FC<NoteItemProps> = ({ title }) => (
  <Card>
    <CardBody>
      <CardTitle>{title}</CardTitle>
    </CardBody>
  </Card>
);
