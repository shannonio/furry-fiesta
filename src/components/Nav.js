import React, { useState } from 'react';
import './Nav.scss';

const Nav = ({ user, fetchUser }) => {
  if (!user) {
    fetchUser();
    return null;
  }

  return (
    <div className="Nav">
      <div>
        Welcome {user.login }
      </div>
      <div className="Nav__avatar">
        <img src={user.avatar_url} />
      </div>
    </div>
  );
}


export default Nav;
