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
      <Segment>
        <Segment size="massive">{this.props.text}</Segment>
        <ChoseButtons id={this.props.id}/>
      </Segment>
    );
  }
}

export default Message;
