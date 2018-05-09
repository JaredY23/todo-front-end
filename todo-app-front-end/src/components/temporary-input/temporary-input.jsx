import React from 'react';
import { TodoListContext } from '../todo-list-section/todo-list-section';

import './temporary-input.css';

const TemporaryInput = () => {
    return (
        <TodoListContext.Consumer>
            {
                value => {
                    return (
                        <input 
                            type='text' 
                            onChange={value.setInputValue} 
                            value={value.inputValue} 
                            placeholder='Add your todo here...'
                        />
                    )
                }
            }
        </TodoListContext.Consumer>
    )
}

export default TemporaryInput;