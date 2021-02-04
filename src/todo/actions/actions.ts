import { type } from 'os';
import { ActionTypes } from '../actionTypes/actionTypes';
import * as types from '../types/types';

export type AddTaskType = {
    type: ActionTypes.ADD_TASK;
    data: types.taskType;
}

export const AddTask = (data: types.taskType): AddTaskType => ({
    type: ActionTypes.ADD_TASK,
    data,
});

export type deleteTaskType = {
    type: ActionTypes.DELETE_TASK;
    data: number;
}

export const deleteTask = (data: number): deleteTaskType => ({
    type: ActionTypes.DELETE_TASK,
    data,
});

export type checkTaskType = {
    type: ActionTypes.CHECK_TASK;
    data: number;
}

export const checkTask = (data: number): checkTaskType => ({
    type: ActionTypes.CHECK_TASK,
    data,
});