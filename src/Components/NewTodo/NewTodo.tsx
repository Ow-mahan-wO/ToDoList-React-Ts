import React,{useRef} from 'react'
import './NewTodo.css'

interface NewTodoProps{
    onAddTodo:(Todo:string)=>void;
}
export const NewTodo:React.FC<NewTodoProps> =props=>{
    const Myref=useRef<HTMLInputElement>(null)

    const TakeTodoHandler=(event:React.FormEvent)=>{
    event.preventDefault();
    const TodoText=Myref.current!.value
    props.onAddTodo(TodoText)
    Myref.current!.value=''
    }
    return(
        <>
         <form action="" className="Form">
            <div className="Container">  
               <p className="Form__Title">ToDoList</p>
            <div className="Input-Container">
            <div className="Form-Input-Container">
               <input className="Form__Input" placeholder="Enter Todo" type="text" ref={Myref} />
            </div>
            <div className="Form-Btn-Container">
                <button className="Form__Button" type='submit' onClick={TakeTodoHandler}>Add</button>
            </div>
            </div>
            </div>
        </form>
        </>
    );
}