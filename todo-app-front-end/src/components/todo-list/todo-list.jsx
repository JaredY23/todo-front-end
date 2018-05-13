import React from 'react';
import { Todo, TodoHeader, AddTodoButton, TemportaryInput } from '../../components';
import { TodoListContext } from '../todo-list-section/todo-list-section';

import './todo-list.css';

const TodoList = () => {
    return (
        <div className='todo-list-container'>
            <TodoHeader />
                <TodoListContext.Consumer>
                    {
                        value => {
                            return (
                                <React.Fragment>
                                    { value.isTemporaryTodoActive ? <TemportaryInput /> : null }
                                    <ul className='todo-list'>
                                        {
                                            value.todoList.length > 0 && value.todoList !== null ? value.todoList.map((todo, index) => (
                                                <Todo uniqueId={todo.id} name={todo.value} key={`${todo}-${index}`} />
                                            ))
                                            :
                                            null
                                        }
                                    </ul>
                                </React.Fragment>
                            )
                        }
                    }
                </TodoListContext.Consumer>
            <AddTodoButton />
        </div>
    )
}

export default TodoList;