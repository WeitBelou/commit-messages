import { combineReducers } from 'redux';
import { Map } from 'immutable';

import { State, Message, MessageId, Votes, Messages } from './state';
import { Action, VOTE_BUG, VOTE_NOT_BUG } from './actions';
import { isNullOrUndefined } from 'util';

const getNextMessage = (messages: Map<MessageId, Message>): Message | undefined =>
  messages.find((message: Message) => isNullOrUndefined(message.vote));

const rootReducer = combineReducers<State>({
  messages: (state: Messages = {all: Map<MessageId, Message>()},
             action: Action): Messages => {

    switch (action.type) {
      case VOTE_BUG:
        return {
          currentMessage: getNextMessage(state.all),
          all: state.all.setIn([0, 'vote'], Votes.BUG)
        };
      case VOTE_NOT_BUG:
        return {
          currentMessage: getNextMessage(state.all),
          all: state.all.setIn([0, 'vote'], Votes.NOT_BUG)
        };
      default:
        return state;
    }
  }
});

export default rootReducer;