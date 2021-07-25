import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import CancelButton from '../../common/ModalButton/CancelButton/CancelButton';
import DoneButton from '../../common/ModalButton/DoneButton/DoneButton';
import { authOps } from '../../../redux/auth';
import styles from './LeaveApp.module.scss';
import { LangContext } from '../../App/App';

import withModal from '../../ModalHoc/withModal/withModal';

const LeaveApp = ({ toogleModal, addOperation }) => {
  const isMobile = useMediaQuery({ query: '(max-device-width: 767px)' });

  const dispatch = useDispatch();

  const onSave = e => {
    e.preventDefault();
    toogleModal();
    dispatch(authOps.logOut());
  };

  const { language } = useContext(LangContext);

  return (
    <form onSubmit={onSave}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {language.trainingPage.logoutModal.desc}
        </h2>
        <div className={styles.btnGroup}>
          <CancelButton styleBtn={styles.btn} onCbClick={toogleModal}>
            {language.trainingPage.logoutModal.cancelBtn}
          </CancelButton>
          {isMobile ? (
            <DoneButton>
              {language.trainingPage.logoutModal.exitBtnMobile}
            </DoneButton>
          ) : (
            <DoneButton>{language.trainingPage.logoutModal.exitBtn}</DoneButton>
          )}
        </div>
      </div>
    </form>
  );
};

export default withModal(LeaveApp);
