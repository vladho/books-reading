import CancelButton from '../../common/ModalButton/CancelButton/CancelButton';
import DoneButton from '../../common/ModalButton/DoneButton/DoneButton';
import styles from './LeaveApp.module.scss';

const LeaveApp = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        The changes you made will be lost if you navigate away from this
        application
      </h2>
      <div className={styles.btnGroup}>
        <CancelButton styleBtn={styles.btn}>Сancel</CancelButton>
        <DoneButton>Leave this app</DoneButton>
      </div>
    </div>
  );
};

export default LeaveApp;
