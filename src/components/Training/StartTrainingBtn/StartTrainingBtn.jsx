import React from 'react';

import styles from './StartTrainingBtn.module.scss';

const StartTrainingBtn = () => {
  return (
    <button type="submit" className={styles.button}>
      Start training
    </button>
  );
};

export default StartTrainingBtn;
