import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { authSls } from '../../redux/auth';

import LanguageSelect from '../LanguageSelect/LanguageSelect';
import AppBar from './AppBar/AppBar';
import css from './AppBar/AppBar.module.scss';

const Header = () => {
  const isAuth = useSelector(authSls.getIsAuth);

  return (
    <header className={css.headerContainer}>
      <nav className={css.header}>
        <NavLink exact to="/login">
          <p className={css.logo}>BR</p>
        </NavLink>
        <LanguageSelect />
        {isAuth && <AppBar />}
        {/* <nav>{isAuth && <AppBar />}</nav> */}
      </nav>
    </header>
  );
};

export default Header;
