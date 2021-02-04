import React, { useState, FC } from 'react';
import InputModule from './components/inputModule/inputModule';
import TaskComponent from './components/task/taskComponent';
import * as types from './types/types';
import './index.css';

export interface Props {
    tasks: Array<types.taskType>;
    addTask: Function;
    deleteTask: Function;
    checkTask: Function;
}

const Todo:FC<Props> = props => {

    const {
        tasks,
        addTask,
        deleteTask,
        checkTask,
    } = props;

    const [inputValue, setInputValue] = useState('');

    const getInputValue = (value: string): void => {
        setInputValue(value);
    }

    const createTask = (): void => {
        const task: types.taskType = {
            id: Date.now(),
            text: inputValue,
            isDone: false,
        }

        addTask(task);
        setInputValue('');
    }

    const renderTask = tasks.map((task: types.taskType) => (
        <TaskComponent

            key={task.id}
            id={task.id}
            text={task.text}
            isDone={task.isDone}
            deleteTask={deleteTask}
            checkTask={checkTask}
        />
    ))

    return(
        <div className={'todo-wrapper'}>
            <InputModule
                createTask={createTask}
                getInputValue={getInputValue}
                inputValue={inputValue}
            />
            <div className={'todo-wrapper_task-wrapper'}>
                {renderTask}
            </div>
        </div>
    )
}

export default React.memo(Todo);