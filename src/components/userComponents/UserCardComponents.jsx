import React from 'react'
import './UserComponents.css'

const UserCardComponents = ({ user }) => {
  return (
    <div className='card-container'>
     
      <div className='card'>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.website}</p>
        
      </div>
</div>
    
  )
}

/*  const UserCardComponents = ({ post }) => {
 return (
   <div>
     <p>{post.id}. {post.title}</p>
   </div>
 );
}; */

export default UserCardComponents