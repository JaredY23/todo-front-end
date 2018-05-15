import React from 'react';
import { TodoListContext } from '../todo-list-section/todo-list-section';

import './add-todo-button.css';

const AddTodoButton = () => {
    return (
        <TodoListContext.Consumer>
            {
                value => {
                    const { addTodo, inputValue } = value;
                    return (
                        <button 
                            className='add-todo-button'
                            onClick={() => value.addTodo(inputValue)}
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