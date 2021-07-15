import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoHome, GoBook } from 'react-icons/go';
// import { authSls, authOps } from '../../../redux/auth';

import css from './AppBar.module.scss';
import { NavLink } from 'react-router-dom';
// import sprite from '../../../assets/icons/sprite-logout-icon.svg';

export default function AppBar() {
    const dispatch = useDispatch();
    // const onLogout = () => dispatch(authOps.logOut());

    // const email = useSelector(authSls.getUserEmail);
    return (
        <div className={css.appBar}>
            <div className={css.menuBlock}>
                <NavLink exact to="/home">
                    <button type="button" className={css.navButton}>
                        <GoHome />
                    </button>
                </NavLink>
                <NavLink exact to="/library">
                    <button type="button" className={css.navButton}>
                        <GoBook />
                    </button>
                </NavLink>
            </div>
            {/* <NavLink className={css.navUserMenu}>
                <ul className={css.navList}>
                    <li className={css.navItem}>
                        <a href="/home" className={css.navItem}>
                            <GoHome />
                        </a>
                    </li>
                    <li className={css.navItem}>
                        <a href="/library" className={css.navItem}>
                            <GoBook />
                        </a>
                    </li>
                </ul>
            </NavLink> */}

            <div className={css.user}>
                <p className={css.userIcon}>R</p>
                <p className={css.userName}>Reanu Keeves</p>
            </div>

            <button
                type="button"
                className={css.logoutButton}
                // onClick={onLogout}
            >
                <span className={css.logoutText}>Log Out</span>
            </button>
        </div>
    );
}
