import React, { Component } from 'react';
import { TodoList } from '../../components';

export const TodoListContext = React.createContext();

class TodoListSection extends Component {
    state = {
        todoList: [],
        completedTodoList:[]
    }

    deleteTodo = this.deleteTodo.bind(this);
    addTodo = this.addTodo.bind(this);
    editTodo = this.editTodo.bind(this);
    completeTodoList = this.completeTodoList.bind(this);

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

    completeToDoList(todo) {
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
                completedTodoList: this.state.completedTodoList
            }}
            >
                <TodoList />              
            </TodoListContext.Provider>
        )
    }
}

export default TodoListSection;
