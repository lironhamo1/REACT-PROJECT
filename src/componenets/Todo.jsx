import { useEffect, useState,Text } from "react"

import axios from 'axios'
import * as utils from '../utils'

const taskUrl='https://jsonplaceholder.typicode.com/todos'

const Todo =({todo})=>{
    const [isClick, setIsClick] = useState(false);
    const [todo1,setTodo1]=useState(todo)

const markCompleted=async()=>{
    const updateTodo=await utils.updateTodo(taskUrl,todo.id)
    setTodo1({...todo,complited:'True'})
}
   
return (
    <>
   
    <table >
        <tbody>
        <tr>
        <td>
    Title:{todo.title}<br/>
    Completed: {todo1.complited}<br/>
    <button onClick={markCompleted}>Mark As Completed</button>


    </td>
     </tr>
     </tbody>
    </table>  
     </>
)
}

export default Todo