import React from 'react';
import { Todo } from '../../components';
import { TodoListContext } from '../todo-list-section/todo-list-section';

const TodoList = () => {
    return (
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
    )
}

export default TodoList;