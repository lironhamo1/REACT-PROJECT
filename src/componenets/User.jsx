import { useEffect, useState } from "react"
import axios from 'axios'
import * as utils from '../utils'

const taskUrl='https://jsonplaceholder.typicode.com/todos'
const userUrl= 'https://jsonplaceholder.typicode.com/users';

const User =(props)=>{
    const [isClick, setIsClick] = useState(false);

    const hasTask=async ()=>{
        const tasks=await utils.getUserItems(taskUrl,props.user.id)
        const unComplitedTask=tasks.filter((task)=>task.completed===false)
        if (unComplitedTask === null){ //all tasks complited
            return false
        }
        else {
            return true
        }

    }

    const updateData= async ()=>{

    }
    const deleteData=()=>{
        const delete1=utils.deleteItem(userUrl,props.user.id)
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
    ID: {props.user.id}<br/>
    name: {props.user.name}<br/>
    email: {props.user.email}<br/>
    <button onClick={updateData}>update</button>
    <button onClick={deleteData}>delete</button>
    <button onMouseOver={otherData} onClick={otherData}>other data</button>
    <div  style={{display:isClick?'block':'none'}}>
            Street: {props.user.address.city}<br/>
            City: {props.user.address.street}<br/>
            Zip Code: {props.user.address.zipcode}<br/>
    </div>
    </td>
     </tr>
     </tbody>
    </table>  
     </>
)
}

export default User