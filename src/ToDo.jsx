import React, { useState } from "react";
 
export default function ToDo() {
    const [todos, setTodos]=useState([]);
    const [input, setInput] = useState('');
    const [pendings, setPending]=useState([]);
    const [completed, setCompleted]=useState([]);

    const addToDo=()=>{
        const newTodo={ text: input, completed: false};
        setTodos([...todos, newTodo]);
        setInput('');
        setPending([...pendings,newTodo]);
        
    }

    const onDelete=(index)=>{
        const newTodos=[...todos];
        const deletedTodo = newTodos.splice(index,1);
        setTodos(newTodos);

        if (deletedTodo[0].completed) {
            setCompleted((prev) => prev.filter((todo)=> todo!==deletedTodo[0]));
        }else{
 setPending((prev)=> prev.filter((todo)=>todo !==deletedTodo[0]));
        }
       
    }
    const onComplete=(index)=>{
     const newTodos= [...todos];
     newTodos[index].completed = !newTodos[index].completed;
     setTodos(newTodos);

     if(newTodos[index].completed){
        setCompleted((prev)=>[...prev, newTodos[index]]);
        setPending((prev)=> prev.filter((todo)=> todo !== newTodos[index]));
     }else{
        setPending((prev)=> [...prev, newTodos[index]]);
        setCompleted((prev)=>prev.filter((todo)=> todo!==newTodos[index]));
     }
    }
    return(
        <>
        <h1>ToDo CRUD Operations</h1>
        <input type="text"
         value={input}
         onChange={(e) => setInput(e.target.value)}
         ></input>
        <button onClick={addToDo}>Add</button>

        {/* {todos.length ===0 ? (
            <p>No Todos yet. Add some tasks!</p>
        ):(
            <>
            <h2>ToDo List</h2>
        
             <ul>
             {todos.map((todo,index)=>(
                 <li key={index} style={{textDecoration: todo.completed ? 'line-through': 'none'}}>
                     {todo.text}
                     <button onClick ={ () =>onComplete(index)}>{todo.completed ? 'Mark Incomplete' : 'Mark Complete'}</button>
                 <button onClick={onDelete}>Delete</button>
                 </li>
                 
             ))}
         </ul>
         </>
        
        )} */}
        
        {pendings.length ===0 ? (
            <p>No Uncomplete Todos yet. Add some tasks!</p>
        ):(
            <>
        <h2>Pending Todos</h2>
      
            <ul>
                {pendings.map((pending, index)=>(
                   <li key={index}>
                        {pending.text}
                        <button onClick ={ ()=>onComplete(index)}>Mark Complete</button>
                        <button onClick={() => onDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            </>
        )}

{completed.length ===0 ? (
           <p>No Completed Todos yet. Finish the uncomplete tasks and mark them complete!</p>
        ):(
            <>
       <h2>Completed Todos</h2>
        
            <ul>
                {completed.map((complete, index)=>(
                    <li key={index}>
                        {complete.text}
                        <button onClick={()=>onComplete(index)}>Mark UnComplete</button>
                        <button onClick={() => onDelete(index)}>Delete</button>
              </li>
                ))}
            </ul>
       
      </>
      )}
       
       
        
        </>
    );
}