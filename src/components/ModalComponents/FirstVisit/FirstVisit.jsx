import React, { useContext } from 'react';
import styles from './FirstVisit.module.scss';
import { ReactComponent as BookIcon } from '../../../assets/icons/bookUnRead.svg';
import { ReactComponent as Flag } from '../../../assets/icons/Flag.svg';
import { ReactComponent as ArrowRight } from '../../../assets/icons/ArrowRight.svg';
import {} from '../../../';
import { LangContext } from '../../App/App';

import withModal from '../../ModalHoc/withModal/withModal';
import CancelButton from '../../common/ModalButton/CancelButton/CancelButton';

const FirstVisit = ({ toogleModal }) => {
  const { language } = useContext(LangContext);

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <h2 className={styles.step}>{language.libraryPage.greet.step1}</h2>

          <div className={styles.titleGoup}>
            <BookIcon className={styles.bookIcon} />
            <h3 className={styles.title}>
              {language.libraryPage.greet.step1_title}
            </h3>
          </div>
          <div className={styles.textGoup}>
            <ArrowRight />
            <p className={styles.text}>
              {language.libraryPage.greet.step1_text}
            </p>
          </div>
        </li>

        <li className={styles.item}>
          <h2 className={styles.step}>{language.libraryPage.greet.step2}</h2>

          <div className={styles.titleGoup}>
            <Flag className={styles.bookIcon} />
            <h3 className={styles.title}>
              {' '}
              {language.libraryPage.greet.step2_title}
            </h3>
          </div>
          <div className={styles.textGoup}>
            <ArrowRight />
            <p className={styles.text}>
              {language.libraryPage.greet.step2_text}
            </p>
          </div>
        </li>
      </ul>

      <CancelButton styleBtn={styles.btn} onCbClick={toogleModal}>
        ok
      </CancelButton>
    </div>
  );
};

export default withModal(FirstVisit);
