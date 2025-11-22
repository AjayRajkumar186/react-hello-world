import axios from 'axios'
import React, { useState } from 'react'
import UserCardComponents from './UserCardComponents'
import './UserComponents.css'

const UserComponents = () => {

  const [user, setUser] = useState([])

    const  fetchuserApi= async() =>{
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      setUser(response.data)
      console.log(response)
    }
    
 
  return (
    <div >
      <button style={{margin:'3px'}} onClick={fetchuserApi}> Fetch User</button>
       <div className='user-container'>
      {user && user.map((user) =>(
       
        <UserCardComponents key={user.id} user={user} />
        
      )
      
    )}
    </div>
    </div>
  )
}

export default UserComponents