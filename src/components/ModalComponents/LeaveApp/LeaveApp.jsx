import CancelButton from '../../common/ModalButton/CancelButton/CancelButton';
import DoneButton from '../../common/ModalButton/DoneButton/DoneButton';
import styles from './LeaveApp.module.scss';

const LeaveApp = () => {
  return (
    <div className={styles.container}>
      <h2>
        The changes you made will be lost if you navigate away from this
        application
      </h2>
      <CancelButton>Сancel</CancelButton>
      <DoneButton>Leave this app</DoneButton>
    </div>
  );
};

export default LeaveApp;
