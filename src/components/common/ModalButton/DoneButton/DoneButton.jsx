import classNames from 'classnames';
import React from 'react';
import styles from './DoneButton.module.scss';

const DoneButton = ({ children, styleBtn }) => {
  return (
    <button type="submit" className={classNames(styles.btn, styleBtn)}>
      {children}
    </button>
  );
};

export default DoneButton;
