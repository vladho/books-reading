import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';

import { Line } from 'react-chartjs-2';

// import { tasksSls } from '../../../redux/tasks';
// import { sprintsSls } from '../../../redux/sprints';

import css from './Chart.module.scss';

const Chart = () => {
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    chartLine();
  }, []); // eslint-disable-line

  const plan = [35, 21, 56, 18, 45, 65, 26];
  const act = [12, 45, 65, 23, 34];

  const planedPages = plan.reduce((acc, day) => (acc += day), 0);
  const avaregePgesPerDay = planedPages / plan.length;

  const chartLine = () => {
    setChartData({
      labels: ['So', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Su'],
      datasets: [
        {
          label: 'Plan',
          fill: false,
          lineTension: 0.3,
          borderColor: '#ff6b08',
          pointBackgroundColor: '#ff6b08',
          pointHoverRadius: 10,
          pointRadius: 8,
          pointHitRadius: 10,
          //   data: [planedHours, ...getWastedLine()],
          data: plan,
        },
        {
          label: 'Act',
          fill: false,
          lineTension: 0.3,
          borderColor: '#091e3f',
          pointBackgroundColor: '#091e3f',
          pointHoverRadius: 10,
          pointRadius: 8,
          pointHitRadius: 10,
          //   data: [...getStreightLine()],
          data: act,
        },
      ],
    });
  };

  const options = {
    scales: {
      yAxis: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    // maintainAspectRatio: false,
    // responsive: false,
  };
  return (
    <>
      <div className={css.chartBox}>
        <p className={css.title}>
          Amount of pages / Day{' '}
          <span className={css.avaregePgesPerDay}>{avaregePgesPerDay}</span>
        </p>
        <div className={css.lineBox}>
          <ul className={css.lineList}>
            <li className={css.lineItem}>Plan</li>
            <li className={css.lineItem}>Act</li>
          </ul>
        </div>
        {/* <Line data={chartData} width={1772} height={886} /> */}
        <Line data={chartData} options={options} />
        <p className={css.chartValue}>Time</p>
      </div>
    </>
  );
};

export default Chart;
