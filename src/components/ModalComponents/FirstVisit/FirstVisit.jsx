import React from 'react';
import styles from './FirstVisit.module.scss';
import { ReactComponent as BookIcon } from '../../../assets/icons/bookUnRead.svg';
import { ReactComponent as Flag } from '../../../assets/icons/Flag.svg';
import { ReactComponent as ArrowRight } from '../../../assets/icons/ArrowRight.svg';
import {} from '../../../';
import OkButton from '../../common/ModalButton/DoneButton/DoneButton';

const FirstVisit = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li>
          <h2 className={styles.step}>Step 1.</h2>
          <div className={styles.titleGoup}>
            <BookIcon className={styles.bookIcon} />
            <h3 className={styles.title}>Create your own library</h3>
          </div>
          <div className={styles.textGoup}>
            <ArrowRight />
            <p className={styles.text}>
              Add there books which you are going to read.
            </p>
          </div>
        </li>
        <li>
          <h2 className={styles.step}>Step 2.</h2>
          <div className={styles.titleGoup}>
            <Flag className={styles.bookIcon} />
            <h3 className={styles.title}>Create your first training</h3>
          </div>
          <div className={styles.textGoup}>
            <ArrowRight />
            <p className={styles.text}>
              Set a goal, choose period, start training.
            </p>
          </div>
        </li>
      </ul>

      <OkButton styleBtn={styles.btn}>ok</OkButton>
    </div>
  );
};

export default FirstVisit;
