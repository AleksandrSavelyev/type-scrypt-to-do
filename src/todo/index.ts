import Component from './todo';
import { connect } from 'react-redux';
import * as actions from './actions/actions';
import * as selectors from './selectors';
import * as types from './types/types';

const mapStateToProps = (state: types.InitialStateType) => ({
    tasks: selectors.getTasks(state),
});

const mapDispatchToProps = (dispatch: any) => ({
    addTask: (data: types.taskType) => dispatch(actions.AddTask(data)),
    deleteTask: (data: number) => dispatch(actions.deleteTask(data)),
    checkTask: (data: number) => dispatch(actions.checkTask(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);