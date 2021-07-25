import { useState, useContext } from 'react';
import CancelButton from '../../common/ModalButton/CancelButton/CancelButton';
import DoneButton from '../../common/ModalButton/DoneButton/DoneButton';
import withModal from '../../ModalHoc/withModal/withModal';
import ChooseRating from './ChooseRating/ChooseRating';
import styles from './RatingBook.module.scss';
import { LangContext } from '../../App/App';

const RatingBook = ({
  toogleModal,
  setRating,
  setResumeValue,
  resumeValue,
}) => {
  const onChangeResume = e => {
    setResumeValue(e.target.value);
  };

  const { language } = useContext(LangContext);

  return (
    <form>
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
