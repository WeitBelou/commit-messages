import * as React from 'react';
import { Button } from 'semantic-ui-react';

interface ChoseButtonsProps {
  id: number;
}

const bugLabel = <span><u>B</u>ug</span>;
const notLabel = <span><u>N</u>ot</span>;

const ChoseButtons: React.SFC<ChoseButtonsProps> = ({id}) => (
  <Button.Group>
    <Button
      content={bugLabel}
      icon="bug"
      positive={true}
    />

    <Button.Or/>

    <Button
      content={notLabel}
    />
  </Button.Group>
);

export default ChoseButtons;