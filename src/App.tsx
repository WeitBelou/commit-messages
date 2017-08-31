import * as React from 'react';

import Voting from './components/Voting';

const App = () => (
  <Voting
    id={0}
    text={'All hands harvest.'}

    onBug={() => alert('On bug')}
    onNotBug={() => alert('On not bug')}
  />
);

export default App;
