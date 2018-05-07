import React from 'react';
import { Todo } from '../../components';
import TodoListContext from '../todo-list-section/todo-list-section';

const TodoList = () => {
    return (
        <TodoListContext.Consumer>
            {
                (value) => (
                    value.todoList.map((todo, index) => (
                        <Todo />
                    ))
                )
            }
        </TodoListContext.Consumer>
    )
}

export default TodoList;