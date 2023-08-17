import { useEffect, useState,Text } from "react"

import axios from 'axios'
import * as utils from '../utils'
import Todos from './Todos'
const taskUrl='https://jsonplaceholder.typicode.com/todos'
const userUrl= 'https://jsonplaceholder.typicode.com/users';

const User =({user})=>{
    const [isClick, setIsClick] = useState(false);
    const [user1,setUser1]=useState(user)


    const hasTask=async ()=>{
        const tasks=await utils.getUserItems(taskUrl,user1.id)
        const unComplitedTask=tasks.filter((task)=>task.completed===false)
        if (unComplitedTask === null){ //all tasks complited
            return false
        }
        else {
            return true
        }

    }

    const updateData= async()=>{
        const {data}= await utils.updateItem(userUrl,user.id,user1)
        console.log(data)
        
    }
    const deleteData=async()=>{
        const {data}=await utils.deleteItem(userUrl,user1.id)
        console.log(data)

    }
    const otherData=()=>{
      setIsClick(!isClick)
    }

 

return (
    <>
    <table border='1' style={{borderColor:hasTask()?'red':'green'}}>
        <tbody>
        <tr>
        <td>
            
     <button >ID:</button>{user.id}<br/>

    name: <input type="text" value={user1.name} onChange={e=>setUser1({...user1,name:e.target.value})}/> <br/>
    email:  <input type="text" value={user1.email} onChange={e=>setUser1({...user1,email:e.target.value})}/> <br/>
    <button onClick={updateData}>update</button>
    <button onClick={deleteData}>delete</button>
    <button onMouseOver={otherData} onClick={otherData}>other data</button>


    <div  style={{display:isClick?'block':'none'}}>
            Street: {user1.address.city}<br/>
            City: {user1.address.street}<br/>
            Zip Code: {user1.address.zipcode}<br/>
    </div>
    </td>
     </tr>
     </tbody>
    </table>  
     </>
)
}

export default User