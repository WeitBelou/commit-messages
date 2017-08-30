import * as React from 'react';
import { Card, Button } from 'semantic-ui-react';

interface MessageProps {
  id: number;
  text: string;
}

class Message extends React.PureComponent<MessageProps> {
  constructor(props: MessageProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <Card>
          <Card.Content>
            {this.props.id}){this.props.text}
          </Card.Content>
          <Card.Content extra={true}>
            <Button.Group>
              <Button basic={true} color="green">OK</Button>
              <Button basic={true} color="red">NOPE</Button>
            </Button.Group>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default Message;
