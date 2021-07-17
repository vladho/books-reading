import React from 'react';
import Chart from '../Chart';
// import { createPortal } from 'react-dom';
import css from './ChartModal.module.scss';

// const modalRootRef = document.querySelector('#modal-root');

export default function ChartModal() {
  return (
    <div className={css.modalBox}>
      <Chart />
    </div>
  );
  // modalRootRef,
}

// add to TrainingWrapper
// import ChartModal from '../../components/Chart/ChartModal/ChartModal';
// <ChartModal />
