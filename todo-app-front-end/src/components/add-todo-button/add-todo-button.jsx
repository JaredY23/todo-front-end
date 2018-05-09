import React from 'react';
import { TodoListContext } from '../todo-list-section/todo-list-section';

import './add-todo-button.css';

const AddTodoButton = () => {
    return (
        <TodoListContext.Consumer>
            {
                value => {
                    return (
                        <button 
                            className='add-todo-button'
                            onClick={value.showTemporaryTodo}
                        >
                            +
                        </button>
                    )
                }
            }
        </TodoListContext.Consumer>
    )
}

export default AddTodoButton;