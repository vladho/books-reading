import styles from './SomeMotivation.module.scss';
import { ReactComponent as ThumpUp } from '../../../assets/icons/thumbUp.svg';
import CancelButton from '../../common/ModalButton/CancelButton/CancelButton';
import withModal from '../../ModalHoc/withModal/withModal';

const SomeMotivation = ({ toogleModal }) => {
  return (
    <div className={styles.container}>
      <div className={styles.thump}>
        <ThumpUp />
      </div>
      <h2 className={styles.title}>
        Well done!
        <br /> but you need to be a little bit faster.
        <br /> You can do it)
      </h2>
      <CancelButton onCbClick={toogleModal} styleBtn={styles.btn}>
        Ok
      </CancelButton>
    </div>
  );
};

export default withModal(SomeMotivation);
