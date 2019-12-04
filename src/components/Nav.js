import React, { useState } from 'react';
import './Nav.scss';

const Nav = ({ user = { name: 'Drogon' }, logIn }) => {
  const [newUser, setNewUser] = useState('');

  const handleInputChange = e => setNewUser(e.target.value);

  return (
    <div className="Nav">
      Welcome { user.name }
      { !user.name && (
        <div className="login-form">
          <input onChange={handleInputChange} value={newUser} />
          <button onClick={() => logIn(newUser)}>Log In!</button>
        </div>
      )}
    </div>
  );
}


export default Nav;
