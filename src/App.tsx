import * as React from 'react';
import { Container } from 'semantic-ui-react';
import Message from './components/Message';

const messages = [
  {
    id: 0,
    text: 'The one tantra of sex is to hurt with mind.',
  },
  {
    id: 1,
    text: 'Galaxy at the holodeck that is when virtual green people walk.',
  },
];

const App = () => (
  <Container>
    <Message id={messages[1].id} text={messages[1].text}/>
  </Container>
);

export default App;
