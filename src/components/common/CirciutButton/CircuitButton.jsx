import React from 'react';
import { HiPlus } from 'react-icons/hi';

import styles from './CircuitButton.module.scss';

const CircuitButton = ({ openModal }) => {
  return (
    <div className={styles.button} onClick={openModal}>
      <HiPlus fontSize="32" className={styles.plusIcon} />
    </div>
  );
};

export default CircuitButton;
