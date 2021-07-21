import CancelButton from '../../common/ModalButton/CancelButton/CancelButton';
import DoneButton from '../../common/ModalButton/DoneButton/DoneButton';
import ChooseRating from './ChooseRating/ChooseRating';
import styles from './RatingBook.module.scss';

const RatingBook = ({ closeModal }) => {
  console.log(closeModal);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Choose rating of the book</h2>
      <ChooseRating />
      <h2 className={styles.title}>Resume</h2>
      <textarea placeholder="..." className={styles.textarea}></textarea>
      <CancelButton styleBtn={styles.canselBtn}>Back</CancelButton>
      <DoneButton styleBtn={styles.doneBtn}>Save</DoneButton>
    </div>
  );
};

export default RatingBook;
