import React, { Component } from 'react';
import { TodoListContext } from '../todo-list-section/todo-list-section';

import './todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        }

        this.clearInputValue = this.clearInputValue.bind(this);
        this.handlePropagation = this.handlePropagation.bind(this);
        this.inputRef = React.createRef();
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.setInputValue = this.setInputValue.bind(this);
        this.focusInput = this.focusInput.bind(this);
    }

    setInputValue(e) {
        this.setState({
            value: e.target.value
        })
    }

    clearInputValue(e) {
        this.setState({
            value: ''
        })
    }

    handlePropagation(e) {
        e.stopPropagation();
    }

    handleKeyDown(e, editTodo, oldValue, newValue) {
        if (e.keyCode === 13) {
            editTodo(oldValue, newValue, this.clearInputValue);
        }
    }

    focusInput(e) {
        this.inputRef.current.focus();
    }

    render() {
        const { name, uniqueId } = this.props;
        return (
            <TodoListContext.Consumer>
                {
                    value => {
                        const { idOfTodoClicked, editTodo, deleteTodo, completeTodo, editingTodo, showEditTodo } = value;
                        return (
                            <div className='todo' onClick={(e) => showEditTodo(e, uniqueId, this.focusInput)}>
                                    <input
                                        onClick={this.handlePropagation}
                                        ref={this.inputRef}
                                        className={editingTodo && idOfTodoClicked === uniqueId ? 'todo-input active' : 'todo-input'} 
                                        type='text' 
                                        onChange={this.setInputValue} 
                                        value={this.state.value} 
                                        onKeyDown={(e) => this.handleKeyDown(e, editTodo, name, this.state.value)}
                                    />
                                    <div onClick={this.handlePropagation} className={editingTodo && idOfTodoClicked === uniqueId ? 'todo-val-container' : 'todo-val-container active'}>
                                        <div className='todo-value'>{ name }</div>
                                        <div className='todo-icons'>
                                            <div className='todo-complete'></div>
                                            <div className='todo-delete'></div>
                                        </div>
                                    </div>
                            </div>
                        )
                    }
                }
            </TodoListContext.Consumer>
        )
    }
}

export default Todo;