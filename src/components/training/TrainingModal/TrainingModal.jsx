import React from 'react';

import styles from './TrainingModal.module.scss';

const TrainingModal = ({ children }) => {
    return <div className={styles.modalWrapper}>{children}</div>;
};

export default TrainingModal;
