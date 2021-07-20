import ChooseRating from './ChooseRating/ChooseRating';
import styles from './RatingBook.module.scss';

const RatingBook = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Choose rating of the book</h2>
      <ChooseRating />
      <h2 className={styles.title}>Resume</h2>
      <textarea placeholder="..." className={styles.textarea}></textarea>
    </div>
  );
};

export default RatingBook;
