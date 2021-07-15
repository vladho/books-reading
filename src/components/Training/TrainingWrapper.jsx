import React from 'react';

import TrainingForm from './TrainingForm/TrainingForm';
import TrainingModal from './TrainingModal/TrainingModal';
import styles from './TrainingWrapper.module.scss';

const TrainingWrapper = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <TrainingModal>
                    <TrainingForm />
                </TrainingModal>
            </div>
        </>
    );
};

export default TrainingWrapper;
