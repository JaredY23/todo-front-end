import React, { Component } from 'react';
import { TodoListContext } from '../todo-list-section/todo-list-section';

class Todo extends Component {
    state = {
        inputValue: ''
    }

    handleChange = this.handleChange.bind(this);

    handleChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    render() {
        return (
            <TodoListContext.Consumer>
                {
                    (value) => {
                        const { addTodo, editTodo, deleteTodo, completeTodo } = value;
                        return (
                            <div className='todo'>
                                <input className='todo-input' type='text' onChange={this.handleChange} value={this.state.value} />
                                <div className='todo-icons'>
                                    <div className='todo-complete'></div>
                                    <div className='todo-delete'></div>
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