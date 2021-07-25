import React from 'react';
import styles from './NestingModal.module.scss';

const NestingModal = ({ children, handleBackdropClick }) => {
  return (
    <div className={styles.modal} onClick={handleBackdropClick}>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default NestingModal;
