import React, { createContext } from 'react';
import UserProfileComponents from './UserProfileComponents';
import './ContextComponents.css'

// Create context outside the component
export const UserContext = createContext();

const WelcomeComponents = ({userName}) => {
  return (
   <UserContext.Provider value={userName}>
      <div className='context'>
        <h1>Hello {userName}</h1>
        <UserProfileComponents />
      </div>
    </UserContext.Provider>
  );
};

export default WelcomeComponents;