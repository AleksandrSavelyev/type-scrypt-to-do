import { ActionTypes } from '../actionTypes/actionTypes';
import * as types from '../types/types';

export type AddTaskType = {
    type: ActionTypes.ADD_TASK;
    data: types.taskType;
}

export const AddTask = (data: types.taskType): AddTaskType => ({
    type: ActionTypes.ADD_TASK,
    data,
})