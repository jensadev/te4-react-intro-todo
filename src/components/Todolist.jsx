import Todoitem from './Todoitem'
import { useState, useEffect } from 'react'
function Todolist () {
    const [todos, setTodos] = useState(() => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    });
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    const addTodo = () => {
        const newTodo = document.getElementById('newTodo').value
        if (newTodo === '') return
        const newTodos = [...todos, { id: todos.length + 1, label: newTodo, completed: false }] 
        setTodos(newTodos)
    }
    const toggleTaskCompleted = (id) => {
        const newTodos = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo )
        setTodos(newTodos)
    };
    return (
        <>
        <input id="newTodo" type="text" placeholder="Skriv in en sak att göra" />
        <button onClick={() => { addTodo() }}>Lägg till</button>
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