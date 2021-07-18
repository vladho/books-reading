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

  const chartLine = () => {
    setChartData({
      //   labels: ['Початок'],
      datasets: [
        {
          label: 'Факт',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#ff6b08',
          borderColor: '#ff6b08',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#ff6b08',
          pointBackgroundColor: '#ff6b08',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#ff6b08',
          pointHoverBorderColor: '#ff6b08',
          pointHoverBorderWidth: 2,
          pointRadius: 3,
          pointHitRadius: 10,
          //   data: [planedHours, ...getWastedLine()],
          data: [35, 21, 56, 18, 45],
        },
        {
          label: 'План',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#091e3f',
          borderColor: '#091e3f',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#091e3f',
          pointBackgroundColor: '#091e3f',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#091e3f',
          pointHoverBorderColor: '#091e3f',
          pointHoverBorderWidth: 2,
          pointRadius: 3,
          pointHitRadius: 10,
          //   data: [...getStreightLine()],
          data: [12, 45, 65, 23, 34],
        },
      ],
    });
  };

  return (
    <>
      <div className={css.chartBox}>
        <p className={css.title}>Кількість сторінок / день</p>
        <div>
          <Line data={chartData} width={900} height={450} />
        </div>
      </div>
    </>
  );
};
export default Chart;
