import styles from './SomeMotivation.module.scss';
import { ReactComponent as ThumpUp } from '../../../assets/icons/thumbUp.svg';
import DoneButton from '../../common/ModalButton/DoneButton/DoneButton';
import CancelButton from '../../common/ModalButton/CancelButton/CancelButton';

const SomeMotivation = ({ toogleModal, message }) => {
  return (
    <div className={styles.container}>
      <div className={styles.thump}>
        <ThumpUp />
      </div>
      <h2 className={styles.title}>
        {/* Well done!
        <br /> but you need to be a little bit faster.
        <br /> You can do it) */}
        {message}
      </h2>
      {/* <div className={styles.btnGroup}> */}
      <CancelButton onCbClick={toogleModal} styleBtn={styles.btn}>
        Ok
      </CancelButton>
      {/* </div> */}
    </div>
  );
};

export default SomeMotivation;
