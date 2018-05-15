import React from 'react';
import { Todo, TodoHeader } from '../../components';
import { TodoListContext } from '../todo-list-section/todo-list-section';

import './todo-list.css';

const TodoList = () => {
    return (
        <div className='todo-list-container'>
            <TodoHeader />
                <TodoListContext.Consumer>
                    {
                        value => {
                            const { todoList } = value;
                            return (
                                <React.Fragment>
                                    <ul className='todo-list'>
                                        {
                                            todoList.length > 0 && todoList !== null ? todoList.map((todo, index) => (
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
        </div>
    )
}

export default TodoList;