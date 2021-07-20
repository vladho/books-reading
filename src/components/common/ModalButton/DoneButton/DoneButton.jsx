import classNames from 'classnames';
import React from 'react';
import styles from './DoneButton.module.scss';

const OkButton = ({ children, styleBtn }) => {
  return (
    <button className={classNames(styles.btn, styleBtn)}>{children}</button>
  );
};

export default OkButton;
