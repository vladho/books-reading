import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoHome, GoBook } from 'react-icons/go';
import { authSls, authOps } from '../../../redux/auth';

import css from './AppBar.module.scss';
import { NavLink } from 'react-router-dom';

export default function AppBar() {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(authOps.logOut());

  const userName = useSelector(authSls.getUserName);
  const userFirstLetter = userName?.substring(0, 1);

  return (
    <div className={css.appBar}>
      <div className={css.menuBlock}>
        <NavLink exact to="/library">
          <button type="button" className={css.navButton}>
            <GoHome />
          </button>
        </NavLink>
        <NavLink exact to="/training">
          <button type="button" className={css.navButton}>
            <GoBook />
          </button>
        </NavLink>
      </div>

      <div className={css.user}>
        <p className={css.userIcon}>{userFirstLetter}</p>
        <p className={css.userName}>{userName}</p>
      </div>

      <button type="button" className={css.logoutButton} onClick={onLogout}>
        <span className={css.logoutText}>Log Out</span>
      </button>
    </div>
  );
}
