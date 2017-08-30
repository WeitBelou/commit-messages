import * as React from 'react';
import { Segment } from 'semantic-ui-react';
import ChoseButtons from './ChoseButtons';

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
      <Segment.Group stacked>
        <Segment>{this.props.text}</Segment>

        <Segment>
          <ChoseButtons id={this.props.id}/>
        </Segment>
      </Segment.Group>
    );
  }
}

export default Message;
