import React, { FC } from 'react';
import './index.css';

export interface Props {
    id?: number;
    text: string;
    isDone: boolean;
    deleteTask: Function;
    checkTask: Function;
}
const TaskComponent: FC<Props> = props => {
    const {
        id,
        text,
        isDone,
        deleteTask,
        checkTask,
    } = props;

    return(
        (!isDone)?
        <div className={'task-wrapper_wrapper wrapper'}>
            <div className={'wrapper_text-wrapper text-wrapper'}
                onClick={()=> checkTask(id)}
            >
                <p className={'text-wrapper_text'}>
                    {text}
                </p>
            </div>
            <div className={'wrapper_delete-button-wrapper delete-button-wrapper'}>
                <button className={'delete-button-wrapper_delete-button'} 
                    onClick={()=>deleteTask(id)}
                    children='X'
                />
            </div>
        </div>
        :
        <div className={'task-wrapper_wrapper wrapper'}
            style={{ backgroundColor: '#ff0000' }}
        >
            <div className={'wrapper_text-wrapper text-wrapper'}
                onClick={()=> checkTask(id)}
            >
                <p className={'text-wrapper_text'}>
                    {text}
                </p>
            </div>
            <div className={'wrapper_delete-button-wrapper delete-button-wrapper'}>
                <button className={'delete-button-wrapper_delete-button'} 
                    onClick={()=>deleteTask(id)}
                    children='X'
                />
            </div>
        </div>
    )
}

export default React.memo(TaskComponent);