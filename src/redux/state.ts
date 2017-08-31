export enum Votes {
  BUG = 'BUG',
  NOT_BUG = 'NOT_BUG',
  NOT_VOTED = 'NOT_VOTED',
}

export type MessageId = number;

export interface Message {
  readonly id: MessageId;
  readonly text: string;
  readonly vote: Votes;
}

export interface Messages {
  readonly currentMessage?: Message;
  readonly all: Message[];
}

export interface State {
  readonly messages: Messages;
}

export const initialState: State = {
  messages: {
    currentMessage: {
      id: 0,
      text: 'I acquire this ionic cannon, it\'s called reliable flight.',
      vote: Votes.NOT_VOTED,
    },
    all: [
      {
        id: 0,
        text: 'I acquire this ionic cannon, it\'s called reliable flight.',
        vote: Votes.NOT_VOTED,
      },
      {
        id: 1,
        text: 'Engage, strange energy!',
        vote: Votes.NOT_VOTED,
      },
      {
        id: 2,
        text: 'All the ships deceive bare, spheroid cosmonauts.',
        vote: Votes.NOT_VOTED,
      },
    ]
  }
};