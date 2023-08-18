import Rract,{useState} from 'react'
import './App.css'

import { TodoList } from './Components/Todo/Todo'
import { NewTodo } from './Components/NewTodo/NewTodo'
import { TodoArray } from './Todo.Model'

const App:React.FC=()=> {
  const [Todos,setTodo]=useState<TodoArray[]>([]);
  
  const AddTodoHandler=(Todo:string)=>{
  setTodo([...Todos,{id:Math.random(),Todo:Todo}])
  }

  return (
    <>
     <NewTodo onAddTodo={AddTodoHandler} />
     <TodoList Item={Todos}/>
    </>
  )
}

export default App
