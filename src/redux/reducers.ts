import { combineReducers } from 'redux';

import { State, Message, MessageId, Votes, Messages } from './state';
import { Action, VOTE_BUG, VOTE_NOT_BUG } from './actions';

/**
 * Returns next unprocessed message or 'undefined'
 * @param {Message[]} messages
 * @returns {Message}
 */
const getNextMessage = (messages: Message[]): Message | undefined =>
  messages.find((message: Message) => message.vote === Votes.NOT_VOTED);

/**
 * Returns new array of messages with one changed to voted
 * @param {Message[]} messages
 * @param {MessageId} id
 * @param {Votes} vote
 * @returns {Message[]}
 */
const voteFor = (messages: Message[], id: MessageId, vote: Votes): Message[] => {
  return messages.map((msg: Message) => (msg.id === id) ? {...msg, vote: vote} : msg);
};

const rootReducer = combineReducers<State>({
  messages: (state: Messages = {all: []},
             action: Action): Messages => {

    switch (action.type) {
      case VOTE_BUG: {
        const newAll = voteFor(state.all, action.id, Votes.BUG);
        return {
          all: newAll,
          currentMessage: getNextMessage(newAll),
        };
      }
      case VOTE_NOT_BUG: {
        const newAll = voteFor(state.all, action.id, Votes.NOT_BUG);
        return {
          all: newAll,
          currentMessage: getNextMessage(newAll),
        };
      }
      default:
        return state;
    }
  }
});

export default rootReducer;