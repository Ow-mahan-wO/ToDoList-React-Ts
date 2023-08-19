import React from 'react'
import { TodoArray } from '../../Todo.Model';
import './Todo.css'

interface TodoProps{
    Item:{id:number,Todo:string,Status:boolean}[];
    setTodo:React.Dispatch<React.SetStateAction<TodoArray[]>>;
}
const TodoList:React.FC<TodoProps> =props=>{
    
    const RemoveTodoHandler=(ItemId:string)=>{
      for (let i = 0; i < props.Item.length; i++) {
      if(props.Item[i].Todo==ItemId){
        props.Item.splice(i,1);
      }
      }
 
      props.setTodo([...props.Item])
    }

    const CompleteTodo=(ItemId:number)=>{
    props.Item.forEach((index)=>{
      if(ItemId==index.id){
        index.Status=true 
      }
    })
    props.setTodo([...props.Item])
    
    }
    return(
        <>
         {props.Item.map((item)=>(
            <div className="Item-Container" key={item.id}>
                <div className={!item.Status?"Todo-Name-Container":"Todo-Name-Container-Complete"}>
                  <p className={!item.Status?"Todo__Name":"Todo__Name-Complete"}>{item.Todo}</p>
                </div>
                <div className={!item.Status?"Todo-Btn-Container":"Todo-Btn-Container-Complete"}>
                  <button className={!item.Status?"Todo__btn":"Todo__btn-Complete"} onClick={()=>CompleteTodo(item.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                    </svg>
                  </button>
                </div>
                <div className={!item.Status?"Todo-Btn-Container":"Todo-Btn-Container-Complete"}>
                 <button className="Todo__btn" onClick={()=>RemoveTodoHandler(item.Todo)}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                     <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                     </svg> 
                 </button>
                </div>
            </div>
         ))}
        </>
    )
}

export {TodoList}