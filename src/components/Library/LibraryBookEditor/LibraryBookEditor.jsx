import React from 'react';
import styles from './LibraryBookEditor.module.scss';

export default function LibraryBookEditor({ onAddBook }) {
  return (
    <div>
      <button type="button" onClick={onAddBook} className={styles.button}>
        Add
      </button>
    </div>
  );
}
