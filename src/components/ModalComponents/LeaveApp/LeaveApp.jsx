import React, { useContext } from 'react';
import CancelButton from '../../common/ModalButton/CancelButton/CancelButton';
import DoneButton from '../../common/ModalButton/DoneButton/DoneButton';
import styles from './LeaveApp.module.scss';
import { LangContext } from '../../App/App';

const LeaveApp = ({ toogleModal }) => {
  const { language } = useContext(LangContext);
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{language.trainingPage.logoutModal.desc}</h2>
      <div className={styles.btnGroup}>
        <CancelButton styleBtn={styles.btn} onCbClick={toogleModal}>
          {language.trainingPage.logoutModal.cancelBtn}
        </CancelButton>
        <DoneButton>{language.trainingPage.logoutModal.exitBtn}</DoneButton>
      </div>
    </div>
  );
};

export default LeaveApp;
