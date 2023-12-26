import React, { useState } from 'react';

export default function CrudOp() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState([]);

    const addToDo =() =>{
        setTodos([...todos, input]);
        setInput('');
    }
    const deleteTodo=( index) =>{
        const newTodos = [...todos];
        newTodos.splice(index,1);
        setTodos(newTodos);
    }
  return (
    <>
      <h1>Todo List</h1>
      <input
      type='text'
      value={input}
      onChange={(e)=> setInput(e.target.value)}></input>
       <button onClick={addToDo}>Add</button>
       <ul>
        {todos.map((todo, index) => (
            <li key={index}>
                {todo}
                <button onClick={() => deleteTodo(index)}>Delete</button>

            </li>
        ))}
       </ul>
    </>
   
  )
}
