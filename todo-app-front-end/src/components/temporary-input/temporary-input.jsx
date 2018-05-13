import React, { Component } from 'react';
import { TodoListContext } from '../todo-list-section/todo-list-section';

import './temporary-input.css';

class TemporaryInput extends Component {
    constructor() {
        super();
        this.inputRef = React.createRef();
        this.focusInput = this.focusInput.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleKeyDown(e, addTodo, inputValue) {
        if (e.keyCode === 13) {
            addTodo(inputValue);
        }
    }

    componentDidMount() {
        this.focusInput();
    }

    focusInput() {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <TodoListContext.Consumer>
                {
                    value => {
                        return (
                            <input 
                                ref={this.inputRef}
                                className='temporary-input'
                                type='text' 
                                onChange={(e) => value.setInputValue(e)} 
                                value={value.inputValue} 
                                placeholder='Add your todo here...'
                                onKeyDown={(e) => this.handleKeyDown(e, value.addTodo, value.inputValue)}
                            />
                        )
                    }
                }
            </TodoListContext.Consumer>
        )
    }
}

export default TemporaryInput;