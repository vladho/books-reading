import React from 'react';

import styles from './TrainingWrapper.module.scss';

import TrainingForm from './TrainingForm/TrainingForm';

const TrainingWrapper = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <TrainingForm />
            </div>
        </>
    );
};

export default TrainingWrapper;
