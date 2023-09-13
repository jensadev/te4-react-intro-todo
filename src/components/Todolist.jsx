import Todoitem from './Todoitem'
import Todonewitem from './Todonewitem';

import { useState, useEffect } from 'react'
function Todolist () {
    const [todos, setTodos] = useState(() => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    });
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    const addTodo = (val) => {
        if (val === '') return
        const newTodos = [...todos, { id: todos.length + 1, label: val, completed: false }] 
        setTodos(newTodos)
    }
    const toggleTaskCompleted = (id) => {
        const newTodos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo )
        setTodos(newTodos)
    };
    return (
        <>
        <Todonewitem addTodo={addTodo} />
        <ul className="todo-list">
            { todos.map((todo, index) => 
                <Todoitem 
                    key={ index }
                    id={ todo.id }
                    label={ todo.label }
                    completed={ todo.completed }
                    toggleTaskCompleted={toggleTaskCompleted}
                    />
            ) }
        </ul>
        </>
    )
}

export default Todolist