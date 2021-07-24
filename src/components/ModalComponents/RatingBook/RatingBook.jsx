import React, { useContext } from 'react';
import CancelButton from '../../common/ModalButton/CancelButton/CancelButton';
import DoneButton from '../../common/ModalButton/DoneButton/DoneButton';
import ChooseRating from './ChooseRating/ChooseRating';
import styles from './RatingBook.module.scss';
import { LangContext } from '../../App/App';

const RatingBook = ({ toogleModal }) => {
  const { language } = useContext(LangContext);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {language.libraryPage.resumeModal.rating}
      </h2>
      <ChooseRating />
      <h2 className={styles.title}>
        {language.libraryPage.resumeModal.textFieldTitle}
      </h2>
      <textarea placeholder="..." className={styles.textarea}></textarea>
      <CancelButton styleBtn={styles.canselBtn} onCbClick={toogleModal}>
        {language.libraryPage.resumeModal.backBtn}
      </CancelButton>
      <DoneButton styleBtn={styles.doneBtn}>
        {language.libraryPage.resumeModal.saveBtn}
      </DoneButton>
    </div>
  );
};

export default RatingBook;
