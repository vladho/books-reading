import { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { booksOperations, booksSelectors } from '../../../redux/books';
import { Formik, Form, Field, ErrorMessage, FastField } from 'formik';
import CancelButton from '../../common/ModalButton/CancelButton/CancelButton';
import DoneButton from '../../common/ModalButton/DoneButton/DoneButton';
import withModal from '../../ModalHoc/withModal/withModal';
import ChooseRating from './ChooseRating/ChooseRating';
import { LangContext } from '../../App/App';
import schemaValidChooseRating from '../../../helpers/validation/schemaValidChooseRating';
import styles from './RatingBook.module.scss';

const RatingBook = ({ toogleModal, id, resume, rating }) => {
  const { language } = useContext(LangContext);
  const [ratingValue, setRatingValue] = useState(rating);

  const [resumeValue, setResumeValue] = useState(resume);

  const dispatch = useDispatch();

  const onChangeResume = e => {
    setResumeValue(e.target.value);
  };

  const onSave = e => {
    e.preventDefault();
    dispatch(booksOperations.updateResumeBook(id, ratingValue, resumeValue));
    toogleModal();
  };

  return (
    <Formik
      initialValues={{ rating, resume }}
      validationSchema={schemaValidChooseRating}
      onSubmit={onSave}
    >
      <Form>
        <div className={styles.container}>
          <h2 className={styles.title}>
            {language.libraryPage.resumeModal.rating}
          </h2>
          <ChooseRating setRating={setRatingValue} rating={rating} />
          <h2 className={styles.title}>
            {language.libraryPage.resumeModal.textFieldTitle}
          </h2>
          <FastField
            placeholder="..."
            type="text"
            name="resume"
            className={styles.textarea}
            value={resumeValue}
            onChange={onChangeResume}
          />
          <CancelButton styleBtn={styles.canselBtn} onCbClick={toogleModal}>
            {language.libraryPage.resumeModal.backBtn}
          </CancelButton>
          <DoneButton styleBtn={styles.doneBtn}>
            {language.libraryPage.resumeModal.saveBtn}
          </DoneButton>
        </div>
      </Form>
    </Formik>
  );
};

export default withModal(RatingBook);
