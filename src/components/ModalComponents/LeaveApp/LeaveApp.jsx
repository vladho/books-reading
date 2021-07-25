import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import CancelButton from '../../common/ModalButton/CancelButton/CancelButton';
import DoneButton from '../../common/ModalButton/DoneButton/DoneButton';
import { authOps } from '../../../redux/auth';
import styles from './LeaveApp.module.scss';
import withModal from '../../ModalHoc/withModal/withModal';

const LeaveApp = ({ toogleModal, addOperation }) => {
  const isMobile = useMediaQuery({ query: '(max-device-width: 767px)' });

  const dispatch = useDispatch();

  const onSave = e => {
    e.preventDefault();
    toogleModal();
    dispatch(authOps.logOut());
  };

  return (
    <form onSubmit={onSave}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          The changes you made will be lost if you navigate away from this
          application
        </h2>
        <div className={styles.btnGroup}>
          <CancelButton styleBtn={styles.btn} onCbClick={toogleModal}>
            Сancel
          </CancelButton>
          {isMobile ? (
            <DoneButton>Leave</DoneButton>
          ) : (
            <DoneButton>Leave this app</DoneButton>
          )}
        </div>
      </div>
    </form>
  );
};

export default withModal(LeaveApp);
