import React from 'react';
import { TemporaryInput, AddTodoButton }  from '../../components';

import './add-todo-section.css';

const AddTodoSection = () => {
    return (
        <div className='add-todo-section'>
            <TemporaryInput />
            <AddTodoButton />
        </div>
    )
}

export default AddTodoSection;