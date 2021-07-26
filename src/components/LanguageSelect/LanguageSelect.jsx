import React, { useContext } from 'react';

import { LangContext } from '../App/App';
import styles from './LanguageSelect.module.scss';

const LanguageSelect = () => {
  const { language, list, setLanguage } = useContext(LangContext);

  const changeHandler = e => {
    setLanguage(e.target.value);
  };

  return (
    <div className={styles.container}>
      <select
        defaultValue={language.title}
        onChange={changeHandler}
        className={styles.select}
      >
        {list.map(item => (
          <option className={styles.option} value={item.title} key={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelect;
