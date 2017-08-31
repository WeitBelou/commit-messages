import * as React from 'react';
import { Container, Segment, Button } from 'semantic-ui-react';

export interface VotingProps {
  id: number;
  text: string;

  onBug: () => void;
  onNotBug: () => void;
}

const Voting: React.SFC<VotingProps> = ({id, text, onBug, onNotBug}) => {
  return (
    <Container>
      <Segment.Group size="massive">
        <Segment>{text}</Segment>

        <Button.Group fluid size="massive">
          <Button positive icon="bug" content="Bug" onClick={onBug}/>

          <Button.Or/>

          <Button content="Not" onClick={onNotBug}/>
        </Button.Group>

      </Segment.Group>
    </Container>
  );
};

export default Voting;