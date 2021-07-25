import { useState } from 'react';
import CancelButton from '../../common/ModalButton/CancelButton/CancelButton';
import DoneButton from '../../common/ModalButton/DoneButton/DoneButton';
import withModal from '../../ModalHoc/withModal/withModal';
import ChooseRating from './ChooseRating/ChooseRating';
import styles from './RatingBook.module.scss';

const RatingBook = ({
  toogleModal,
  setRating,
  setResumeValue,
  resumeValue,
}) => {
  const onChangeResume = e => {
    setResumeValue(e.target.value);
  };

  return (
    <form>
      <div className={styles.container}>
        <h2 className={styles.title}>Choose rating of the book</h2>
        <ChooseRating setRating={setRating} />
        <h2 className={styles.title}>Resume</h2>
        <textarea
          placeholder="..."
          type="text"
          name="resume"
          className={styles.textarea}
          value={resumeValue}
          onChange={onChangeResume}
        ></textarea>
        <CancelButton styleBtn={styles.canselBtn} onCbClick={toogleModal}>
          Back
        </CancelButton>
        <DoneButton styleBtn={styles.doneBtn}>Save</DoneButton>
      </div>
    </form>
  );
};

export default withModal(RatingBook);
