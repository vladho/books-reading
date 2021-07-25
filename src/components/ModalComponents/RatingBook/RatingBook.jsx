import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { booksOperations } from '../../../redux/books';
import CancelButton from '../../common/ModalButton/CancelButton/CancelButton';
import DoneButton from '../../common/ModalButton/DoneButton/DoneButton';
import ChooseRating from './ChooseRating/ChooseRating';
import styles from './RatingBook.module.scss';

const RatingBook = ({ toogleModal, setRating, setOnResume, onResume }) => {
  const [resume, setResume] = useState('');

  const onChangeResume = e => {
    // setResume(e.target.value);
    // e.preventDefault();
    setResume(e.target.value);
    setOnResume(resume);
  };

  // const testSubmit = e => {
  //   // e.preventDefault();
  //   test(resume);
  // };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Choose rating of the book</h2>
      <ChooseRating setRating={setRating} />
      <h2 className={styles.title}>Resume</h2>
      <textarea
        placeholder="..."
        type="text"
        name="resume"
        className={styles.textarea}
        value={resume}
        onChange={onChangeResume}
      ></textarea>
      <CancelButton styleBtn={styles.canselBtn} onCbClick={toogleModal}>
        Back
      </CancelButton>
      <DoneButton styleBtn={styles.doneBtn}>Save</DoneButton>
    </div>
  );
};

export default RatingBook;
