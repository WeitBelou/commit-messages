import { combineReducers } from 'redux';
import { Map } from 'immutable';

import { State, Message, MessageId, Votes } from './state';
import { Action, VOTE_BUG, VOTE_NOT_BUG } from './actions';

const rootReducer = combineReducers<State>({
  messages: (state: Map<MessageId, Message> = Map<MessageId, Message>(), action: Action): Map<MessageId, Message> => {
    switch (action.type) {
      case VOTE_BUG:
        return state.setIn([0, 'vote'], Votes.BUG);
      case VOTE_NOT_BUG:
        return state.setIn([0, 'vote'], Votes.NOT_BUG);
      default:
        return state;
    }
  }
});

export default rootReducer;