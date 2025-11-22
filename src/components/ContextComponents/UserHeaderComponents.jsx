import React, { useContext } from 'react';
import { UserContext } from './welcomeComponents';

const UserHeaderComponents = () => {
  // Consume the context inside the component
  const userName = useContext(UserContext);

  return (
    <div>{userName}</div>
  );
};

export default UserHeaderComponents;