import React, { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { GoHome, GoBook } from 'react-icons/go';
import { authSls } from '../../../redux/auth';
import { CSSTransition } from 'react-transition-group';
import css from './AppBar.module.scss';
import { NavLink } from 'react-router-dom';
import { LangContext } from '../../App/App';

import LeaveApp from '../../ModalComponents/LeaveApp/LeaveApp';
import '../../../styles/animation.scss';

export default function AppBar() {
  const { language } = useContext(LangContext);
  const [showModal, setShowModal] = useState(false);

  const isShowModal = () => {
    setShowModal(!showModal);
  };

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
      <CSSTransition
        classNames="option"
        timeout={600}
        in={showModal}
        unmountOnExit
      >
        <LeaveApp
          toogleModal={isShowModal}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </CSSTransition>
      <button type="button" className={css.logoutButton} onClick={isShowModal}>
        <span className={css.logoutText}>{language.logout}</span>
      </button>
    </div>
  );
}
