import styles from './SomeMotivation.module.scss';
import { ReactComponent as ThumpUp } from '../../../assets/icons/thumbUp.svg';
import DoneButton from '../../common/ModalButton/DoneButton/DoneButton';

const SomeMotivation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.thump}>
        <ThumpUp />
      </div>
      <h2 className={styles.title}>
        Well done!
        <p /> but you need to be a little bit faster.
        <p /> You can do it)
      </h2>
      <div className={styles.btn}>
        <DoneButton>Ok</DoneButton>
      </div>
    </div>
  );
};

export default SomeMotivation;
