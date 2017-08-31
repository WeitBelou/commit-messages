import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { default as Voting, VotingPropsCallbacks, VotingPropsValues } from './Voting';

import { MessageId, State } from '../redux/state';
import { actionCreators } from '../redux/actions';

const mapStateToProps = (state: State): VotingPropsValues => ({
  message: state.messages.currentMessage
});

const mapDispatchToProps = (dispatch: Dispatch<State>): VotingPropsCallbacks => ({
  onBug: (id: MessageId) => dispatch(actionCreators.voteBug(id)),
  onNotBug: (id: MessageId) => dispatch(actionCreators.voteNotBug(id)),
});

const VotingContainer = connect(mapStateToProps, mapDispatchToProps)(Voting);

export default VotingContainer;