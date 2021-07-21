import classNames from 'classnames';
import React from 'react';
import styles from './CancelButton.module.scss';

const CancelButton = ({ children, styleBtn }) => {
  return (
    <button type="button" className={classNames(styles.btn, styleBtn)}>
      {children}
    </button>
  );
};

export default CancelButton;
