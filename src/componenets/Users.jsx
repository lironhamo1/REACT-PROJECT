import { useEffect, useState } from "react"
import axios from 'axios'
import User from "./User"
const url='https://jsonplaceholder.typicode.com/users'

const Users =()=>{
const [users,setUsers]=useState([])

useEffect(()=>{
    const fetchData=async()=>{
        const {data}=await axios.get(url)
        setUsers(data)
    }
    fetchData()
},[])

const searchUsers= (e)=>{
    let newUsers= users.filter((user)=>(user.email).includes(e.target.value) ||(user.name).includes(e.target.value) )
    setUsers(newUsers)
}
return (
    <>
    search: <input type='text' onInput={searchUsers} />
    <h1>Users:</h1>
    {
        users.map((user)=>{
            return(
                <div key={user.id}>
                    <User user={user}/> <br/>     
                    </div>
            )
        })
    }
    </>
)
}

export default Users