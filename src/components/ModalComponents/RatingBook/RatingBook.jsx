import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { booksOperations } from '../../../redux/books';
import { Formik, Form, Field, ErrorMessage } from 'formik';
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

  const dispatch = useDispatch();

  const onSave = ({ resume }) => {
    dispatch(booksOperations.updateResumeBook(id, ratingValue, resume));
  };

  return (
    <Formik
      initialValues={{ resume: resume }}
      validationSchema={schemaValidChooseRating}
      onSubmit={onSave}
    >
      {({ touched, errors }) => (
        <Form>
          <div className={styles.container}>
            <h2 className={styles.title}>
              {language.libraryPage.resumeModal.rating}
            </h2>
            <ChooseRating
              setRating={setRatingValue}
              rating={rating}
              name="rating"
            />
            <h2 className={styles.title}>
              {language.libraryPage.resumeModal.textFieldTitle}
            </h2>
            <Field
              as="textarea"
              placeholder="..."
              type="text"
              name="resume"
              className={
                `${touched.resume && errors.resume}` ? `${styles.textarea}` : ''
              }
            />
            <ErrorMessage
              component="div"
              name="resume"
              className={styles.errorMessage}
            />
            <CancelButton styleBtn={styles.canselBtn} onCbClick={toogleModal}>
              {language.libraryPage.resumeModal.backBtn}
            </CancelButton>
            <DoneButton styleBtn={styles.doneBtn}>
              {language.libraryPage.resumeModal.saveBtn}
            </DoneButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default withModal(RatingBook);
