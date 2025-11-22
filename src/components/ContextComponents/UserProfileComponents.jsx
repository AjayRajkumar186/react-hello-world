import React from 'react'
import UserHeaderComponents from './UserHeaderComponents'
import './ContextComponents.css'
const UserProfileComponents = () => {
  return (
    <div className='context'>
     <UserHeaderComponents/>
      <p>
        skills
       
      </p>
       <ul>
        <li>HTML</li>
        <li>Css</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    </div>
  )
}

export default UserProfileComponents