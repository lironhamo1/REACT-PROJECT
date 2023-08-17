import { useEffect, useState } from "react"
import axios from 'axios'
import Todo from "./Todo"
const url='https://jsonplaceholder.typicode.com/todos'

const Todos =({user})=>{
const [todos,setTodos]=useState([])

useEffect(()=>{
    const fetchData=async()=>{
        const {data}=await axios.getUserItems(url,user.id)
        setUsers(data)
    }
    fetchData()
},[todos])


return (
  <>
    <h1>Todos UserID:{user.id}</h1>
    {
        todos.map((todo)=>{
            return(
                <div key={todo.id}>
                    <Todo todo={todo}/> <br/>     
                    </div>
            )
        })
    }
    </>
)
}

export default Todos