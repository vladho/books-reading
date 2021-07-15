import React from 'react';
import { HiPlus } from 'react-icons/hi';

import styles from './CircuitButton.module.scss';

const CircuitButton = () => {
  return (
    <div className={styles.button}>
      <HiPlus fontSize="32" className={styles.plusIcon} />
    </div>
  );
};

export default CircuitButton;
