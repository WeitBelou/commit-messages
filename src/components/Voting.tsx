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

/**
 * Create new voting component.
 * @param {Message} message
 * @param {(id: MessageId) => void} onBug
 * @param {(id: MessageId) => void} onNotBug
 * @returns {any}
 * @constructor
 */
const Voting: React.SFC<VotingProps> = ({message, onBug, onNotBug}) => {
  const safeMessage = isNullOrUndefined(message) ? {id: -1, text: ''} : message;

  const onBugHandler = () => onBug(safeMessage.id);
  const onNotBugHandler = () => onNotBug(safeMessage.id);

  const onKeyPressHandler = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'B':
      case 'b':
        onBugHandler();
        return;
      case 'N':
      case 'n':
        onNotBugHandler();
        return;
      default:
        return;
    }
  };

  return (
    <Container text>
      <Segment.Group size="massive">
        <Segment>{safeMessage.text}</Segment>

        <Button.Group fluid size="massive" onKeyPress={onKeyPressHandler}>
          <Button positive icon="bug" content="Bug" onClick={onBugHandler}/>

          <Button.Or/>

          <Button content="Not" onClick={onNotBugHandler}/>
        </Button.Group>

      </Segment.Group>
    </Container>
  );
};

export default Voting;