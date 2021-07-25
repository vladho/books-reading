import React, { useContext } from 'react';

import { LangContext } from '../../App/App';
import styles from './SomeMotivation.module.scss';
import { ReactComponent as ThumpUp } from '../../../assets/icons/thumbUp.svg';
import CancelButton from '../../common/ModalButton/CancelButton/CancelButton';
import withModal from '../../ModalHoc/withModal/withModal';

const SomeMotivation = ({ toogleModal }) => {
  const { language } = useContext(LangContext);

  return (
    <div className={styles.container}>
      <div className={styles.thump}>
        <ThumpUp />
      </div>
      <h2 className={styles.title}>
        {language.trainingPage.successModal.text1}
        <br /> {language.trainingPage.successModal.text2}
        <br /> {language.trainingPage.successModal.text3}
      </h2>
      <CancelButton onCbClick={toogleModal} styleBtn={styles.btn}>
        {language.trainingPage.successModal.okBtn}
      </CancelButton>
    </div>
  );
};

export default withModal(SomeMotivation);
