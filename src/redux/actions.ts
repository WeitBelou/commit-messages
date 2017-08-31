import { MessageId } from './state';

export const VOTE_BUG = 'VOTE_BUG';
export const VOTE_NOT_BUG = 'VOTE_NOT_BUG';

export type Actions = {
  VOTE_BUG: { type: typeof VOTE_BUG, id: MessageId },
  VOTE_NOT_BUG: { type: typeof VOTE_NOT_BUG, id: MessageId },
};

export type Action = Actions[keyof Actions];

export const actionCreators = {
  voteBug: (id: MessageId): Actions[typeof VOTE_BUG] => ({type: VOTE_BUG, id: id}),
  voteNotBug: (id: MessageId): Actions[typeof VOTE_NOT_BUG] => ({type: VOTE_NOT_BUG, id: id}),
};