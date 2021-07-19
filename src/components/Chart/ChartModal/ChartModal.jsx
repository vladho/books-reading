import React from 'react';
import Chart from '../Chart';
import css from './ChartModal.module.scss';

export default function ChartModal() {
  return (
    <div className={css.modalBox}>
      <Chart />
    </div>
  );
}

// add to TrainingWrapper
// import ChartModal from '../../components/Chart/ChartModal/ChartModal';
// <ChartModal />
