import * as types from '../types/types';
import { ActionTypes } from '../actionTypes/actionTypes';

export type InitialStateType = {
    tasks: Array<types.taskType>;
};

const initialState: InitialStateType = {
    tasks: [],
};

// @ts-ignore
const reducer = (state = initialState, action: any): InitialStateType => {
    const { type, data } = action;

    switch (type) {
        case ActionTypes.ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, data],
            }
        case ActionTypes.DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(item => data !== item.id)
            }
        case ActionTypes.CHECK_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === data ? { ...task, isDone: !task.isDone } : task)
            }
        default:
            return state
    }
}

export default reducer;


