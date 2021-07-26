import classNames from 'classnames';
import React from 'react';
import styles from './CancelButton.module.scss';

const CancelButton = ({ onCbClick, children, styleBtn }) => {
  // console.log('close modal');
  return (
    <button
      type="button"
      onClick={onCbClick}
      className={classNames(styles.btn, styleBtn)}
    >
      {children}
    </button>
  );
};

export default CancelButton;
