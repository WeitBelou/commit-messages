import * as React from 'react';
import { Container, Header } from 'semantic-ui-react';
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
    <Header as="h2">
      Commit messages classifier
    </Header>
    {messages.map((message) => (<Message key={message.id} id={message.id} text={message.text}/>))}
  </Container>
);

export default App;
