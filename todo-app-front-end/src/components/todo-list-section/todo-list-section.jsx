import React, { Component } from 'react';
import { TodoList, AddTodoSection } from '../../components';

import './todo-list-section.css';

export const TodoListContext = React.createContext();

class TodoListSection extends Component {
    state = {
        todoList: [],
        completedTodoList:[],
        editingTodo: false,
        inputValue: '',
        idOfTodoClicked: null
    }

    setInputValue = this.setInputValue.bind(this);
    deleteTodo = this.deleteTodo.bind(this);
    addTodo = this.addTodo.bind(this);
    editTodo = this.editTodo.bind(this);
    completeTodo = this.completeTodo.bind(this);
    showEditTodo = this.showEditTodo.bind(this);

    setInputValue(e) {
        this.setState({
            ...this.state,
            inputValue: e.target.value
        })
    }

    deleteTodo(todo) {
        let todoList = this.state.todoList;
        let newTodoList = [...todoList];

        let indexOfTodoThatWillBeDeleted = todoList.indexOf(todoList.filter((todo, index) => todo.value === todo));

        newTodoList.splice(indexOfTodoThatWillBeDeleted, 1);
        
        this.setState({
            ...this.state,
            todoList: newTodoList
        })
    } 

    addTodo(todo) {
        if (todo === null || todo === '') {
            return
        }
        let todoList = this.state.todoList;
        let newTodo = {
            value: todo,
            id: todo + '-' + Date.now()
        }
        let newTodoList = [...todoList];

        newTodoList.push(newTodo);

        this.setState({
            ...this.state,
            todoList: newTodoList,
            inputValue: '',
            isTemporaryTodoActive: false
        })
    }

    editTodo(uniqueId, newValue, callback) {
        let todoList = this.state.todoList;
        let newTodoList = [...todoList];
        let indexOfTodoThatWillBeDeleted = todoList.indexOf(todoList.filter((todo, index) => todo.id === uniqueId)[0]);

        let newTodo = {
            value: newValue,
            id: newValue + '-' + Date.now()
        }

        newTodoList.splice(indexOfTodoThatWillBeDeleted, 1, newTodo);

        this.setState({
            ...this.state,
            todoList: newTodoList,
            editingTodo: false,
            idOfTodoClicked: null
        }, callback)
    }

    completeTodo(todo) {
        let todoList = this.state.todoList;
        let newTodoList = [...todoList];
        let indexOfTodoThatWillBeDeleted = todoList.indexOf(todoList.filter((todo, index) => todo.value === todo)[0]);
        let newCompletedTodoList = [todo, ...this.state.completedTodoList]

        newTodoList.splice(indexOfTodoThatWillBeDeleted, 1);

        this.setState({
            ...this.state,
            todoList: newTodoList,
            completedTodoList: newCompletedTodoList,
            editingTodo: false
        })
    }

    showEditTodo(e, uniqueId, callback) {
        if (this.state.editingTodo) {
            return;
        }

        this.setState({
            ...this.state,
            editingTodo: true,
            idOfTodoClicked: uniqueId
        }, callback)
    }

    render() {
        return (
            <TodoListContext.Provider value={{
                inputValue: this.state.inputValue,
                todoList: this.state.todoList,
                editingTodo: this.state.editingTodo,
                completedTodoList: this.state.completedTodoList,
                deleteTodo: this.deleteTodo,
                addTodo: this.addTodo,
                editTodo: this.editTodo,
                completeTodo: this.completeTodo,
                setInputValue: this.setInputValue,
                showEditTodo: this.showEditTodo,
                idOfTodoClicked: this.state.idOfTodoClicked
            }}
            >
                <div className='todo-section'>
                    <TodoList />
                    <AddTodoSection />
                </div>
            </TodoListContext.Provider>
        )
    }
}

export default TodoListSection;
