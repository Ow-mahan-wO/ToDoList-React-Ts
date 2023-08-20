import React,{useState} from 'react'
import './App.css'

import { TodoList } from './Components/Todo/Todo'
import { NewTodo } from './Components/NewTodo/NewTodo'
import { TodoArray } from './Todo.Model'

let TodoId=0
const App:React.FC=()=> {
  const [Todos,setTodo]=useState<TodoArray[]>([]);
  
  
  const AddTodoHandler=(Todo:string)=>{
    setTodo([...Todos,{id:TodoId++,Todo:Todo,Status:false}])
    localStorage.setItem('value',JSON.stringify(Todos))
  }
  
  return (
    <>
     <NewTodo onAddTodo={AddTodoHandler} />
     <TodoList Item={JSON.parse(localStorage.getItem('value')!)||Todos} setTodo={setTodo}/>
    </>
  )
}

export default App
