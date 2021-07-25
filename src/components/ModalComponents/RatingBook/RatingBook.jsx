import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { booksOperations } from '../../../redux/books';
import CancelButton from '../../common/ModalButton/CancelButton/CancelButton';
import DoneButton from '../../common/ModalButton/DoneButton/DoneButton';
import withModal from '../../ModalHoc/withModal/withModal';
import ChooseRating from './ChooseRating/ChooseRating';
import styles from './RatingBook.module.scss';
import { LangContext } from '../../App/App';

const RatingBook = ({
  toogleModal,
  id,
  // setRating,
  // setResumeValue,
  // resumeValue,
  // rating,
}) => {
  const [rating, setRating] = useState(0);
  const [resumeValue, setResumeValue] = useState('');

  const dispatch = useDispatch();

  // console.log(id);
  // console.log(rating);
  // console.log(resumeValue);

  const onChangeResume = e => {
    setResumeValue(e.target.value);
  };

  const onSave = e => {
    e.preventDefault();
    dispatch(booksOperations.updateResumeBook(id, rating, resumeValue));
    toogleModal();
  };
  const { language } = useContext(LangContext);

  return (
    <form onSubmit={onSave}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {language.libraryPage.resumeModal.rating}
        </h2>
        <ChooseRating setRating={setRating} />
        <h2 className={styles.title}>
          {language.libraryPage.resumeModal.textFieldTitle}
        </h2>
        <textarea
          placeholder="..."
          type="text"
          name="resume"
          className={styles.textarea}
          value={resumeValue}
          onChange={onChangeResume}
        ></textarea>
        <CancelButton styleBtn={styles.canselBtn} onCbClick={toogleModal}>
          {language.libraryPage.resumeModal.backBtn}
        </CancelButton>
        <DoneButton styleBtn={styles.doneBtn}>
          {language.libraryPage.resumeModal.saveBtn}
        </DoneButton>
      </div>
    </form>
  );
};

export default withModal(RatingBook);
