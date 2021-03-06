import React, { FC } from 'react';
import './index.css'

export interface Props {
    createTask: any;
    inputValue: string;
    getInputValue: Function;
}
const InputModule:FC<Props> = props => {
    const {
        createTask,
        inputValue,
        getInputValue,
    } = props;

    return(
        <div className={'input-module_wrapper wrapper'}>
            <div className={'wrapper_input-wrapper input-wrapper'}>
                <input
                    onChange={(event => getInputValue(event.target.value))}
                    className={'input-wrapper_input'}
                    value={inputValue}
                    type={'text'}/>
            </div>
            <div className={'wrapper_button-wrapper button-wrapper'}>
                <button
                    onClick={createTask}
                    className={'button-wrapper_button'}>
                    Add
                </button>
            </div>
        </div>
    )
}

export default React.memo(InputModule);