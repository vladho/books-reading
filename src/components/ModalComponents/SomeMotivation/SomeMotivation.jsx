import React, { useContext } from 'react';

import { LangContext } from '../../App/App';
import styles from './SomeMotivation.module.scss';
import { ReactComponent as ThumpUp } from '../../../assets/icons/thumbUp.svg';
import DoneButton from '../../common/ModalButton/DoneButton/DoneButton';

const SomeMotivation = () => {
  const { language } = useContext(LangContext);

  return (
    <div className={styles.container}>
      <div className={styles.thump}>
        <ThumpUp />
      </div>
      <h2 className={styles.title}>
        {language.trainingPage.successModal.text1}
        <p>{language.trainingPage.successModal.text2}</p>
        <p>{language.trainingPage.successModal.text3}</p>
      </h2>
      <div className={styles.btn}>
        <DoneButton>{language.trainingPage.successModal.okBtn}</DoneButton>
      </div>
    </div>
  );
};

export default SomeMotivation;
