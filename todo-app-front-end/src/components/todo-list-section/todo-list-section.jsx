import React, { Component } from 'react';
import { TodoList } from '../../components';

export const TodoListContext = React.createContext();

class TodoListSection extends Component {
    state = {
        todoList: [],
        completedTodoList:[]
    }

    deleteTodo(todo) {
        let todoList = this.state.todoList;
        let newTodoList = [...todoList];
        let indexOfTodoThatWillBeDeleted = todoList.indexOf(todo);

        newTodoList.splice(indexOfTodoThatWillBeDeleted, 1);
        
        this.setState({
            ...this.state,
            todoList: newTodoList
        })
    } 

    addTodo(todo) {
        let todoList = this.state.todoList;
        let newTodoList = [todo, ...todoList];

        this.setState({
            ...this.state,
            todoList: newTodoList
        })
    }

    editTodo(todo, newTodo) {
        let todoList = this.state.todoList;
        let newTodoList = [...todoList];
        let indexOfTodoThatWillBeDeleted = todoList.indexOf(todo);

        newTodoList.splice(indexOfTodoThatWillBeDeleted, 1, newTodo);

        this.setState({
            ...this.state,
            todoList: newTodoList
        })
    }

    completeTodo(todo) {
        let todoList = this.state.todoList;
        let newTodoList = [...todoList];
        let indexOfTodoThatWillBeDeleted = todoList.indexOf(todo);
        let newCompletedTodoList = [todo, ...this.state.completedTodoList]

        newTodoList.splice(indexOfTodoThatWillBeDeleted, 1);

        this.setState({
            ...this.state,
            todoList: newTodoList,
            completedTodoList: newCompletedTodoList
        })
    }

    render() {
        return (
            <TodoListContext.Provider value={{
                todoList: this.state.todoList,
                completedTodoList: this.state.completedTodoList,
                deleteTodo: this.deleteTodo,
                addTodo: this.addTodo,
                editTodo: this.editTodo,
                completeTodo: this.completeTodo
            }}
            >
                <div className='todo-section'>
                    <TodoList />
                </div>
            </TodoListContext.Provider>
        )
    }
}

export default TodoListSection;
