import { Map } from 'immutable';

export enum Votes {
  BUG,
  NOT_BUG,
}

export type MessageId = number;

export type Message = {
  readonly id: MessageId;
  readonly text: string;
  readonly vote?: Votes
};

export type State = {
  readonly messages: Map<MessageId, Message>
};

export const initialState: State = {
  messages: Map<MessageId, Message>({
    0: {
      id: 0,
      text: 'I acquire this ionic cannon, it\'s called reliable flight.',
    },
    1: {
      id: 1,
      text: 'Engage, strange energy!',
    },
    2: {
      id: 2,
      text: 'All the ships deceive bare, spheroid cosmonauts.',
    },
  })
};