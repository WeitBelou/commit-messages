import * as React from 'react';
import { Container, Segment, Button } from 'semantic-ui-react';

import { Message, MessageId } from '../redux/state';
import { isNullOrUndefined } from 'util';

export interface VotingPropsValues {
  message?: Message;
}

export interface VotingPropsCallbacks {
  onBug: (id: MessageId) => void;
  onNotBug: (id: MessageId) => void;
}

export interface VotingProps extends VotingPropsValues, VotingPropsCallbacks {
}

const Voting: React.SFC<VotingProps> = ({message, onBug, onNotBug}) => {
  const safeMessage = isNullOrUndefined(message) ? {id: -1, text: ''} : message;

  const onBugHandler = () => onBug(safeMessage.id);
  const onNotBugHandler = () => onNotBug(safeMessage.id);

  return (
    <Container>
      <Segment.Group size="massive">
        <Segment>{safeMessage.text}</Segment>

        <Button.Group fluid size="massive">
          <Button positive icon="bug" content="Bug" onClick={onBugHandler}/>

          <Button.Or/>

          <Button content="Not" onClick={onNotBugHandler}/>
        </Button.Group>

      </Segment.Group>
    </Container>
  );
};

export default Voting;