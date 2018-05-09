import React from 'react';
import { Todo, TodoHeader } from '../../components';
import { TodoListContext } from '../todo-list-section/todo-list-section';

const TodoList = () => {
    return (
        <div className='todo-list-container'>
            <TodoHeader />
            <ul className='todo-list'>
                <TodoListContext.Consumer>
                    {
                        value => {
                        value.todoList.length > 0 && value.todoList !== null ? value.todoList.map((todo, index) => (
                                <div>hello</div>
                            ))
                            :
                            null
                        }
                    }
                </TodoListContext.Consumer>
            </ul>
        </div>
    )
}

export default TodoList;