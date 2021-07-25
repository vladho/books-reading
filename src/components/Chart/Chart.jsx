import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import moment from 'moment';
import { extendMoment } from 'moment-range';
import { Line } from 'react-chartjs-2';

import { trainingSelectors } from '../../redux/training';
// import { booksSelectors } from '../../redux/books';

import css from './Chart.module.scss';

const Chart = () => {
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    chartLine();
  }, []); // eslint-disable-line

  const getChartResults = useSelector(trainingSelectors.getChartResults); // пока есть тестовый массив
  const startDate = useSelector(trainingSelectors.selectStartDate);
  const endDate = useSelector(trainingSelectors.selectEndDate);
  const getStartDate = useSelector(trainingSelectors.getStartDate);
  const getEndDate = useSelector(trainingSelectors.getEndDate);
  const getIsStarted = useSelector(trainingSelectors.getIsStarted);

  // ===== тестовые данные - имитация бэка
  // const getChartResults = [
  //   {
  //     date: '2021-07-23',
  //     planedPages: 19,
  //     factPages: 70,
  //     stats: [
  //       {
  //         time: '12:08:26',
  //         pages: 25,
  //       },
  //       {
  //         time: '13:09:25',
  //         pages: 25,
  //       },
  //       {
  //         time: '14:10:25',
  //         pages: 20,
  //       },
  //     ],
  //   },
  //   {
  //     date: '2021-07-24',
  //     planedPages: 60,
  //     factPages: 30,
  //     stats: [
  //       {
  //         time: '12:08:26',
  //         pages: 10,
  //       },
  //       {
  //         time: '13:09:25',
  //         pages: 15,
  //       },
  //       {
  //         time: '14:10:25',
  //         pages: 5,
  //       },
  //     ],
  //   },
  // ];

  const planedPagesArray = getChartResults.map(({ plannedPages }) => {
    return plannedPages;
  });

  const factPagesArray = getChartResults.map(({ factPages }) => {
    return factPages;
  });

  const lastOfPlanedArray = planedPagesArray[planedPagesArray.length - 1];
  const lastOfFactArray = factPagesArray[factPagesArray.length - 1];

  //  ================ Массив дат start to end: ===================
  const momentArr = extendMoment(moment);

  const start = getIsStarted ? getStartDate : startDate;
  const end = getIsStarted ? getEndDate : endDate;

  const getDates = moment.range(momentArr(start), momentArr(end));

  const getDatesArray = () => {
    return Array.from(getDates.by('day')).map(({ _d: date }) => {
      return moment(date).format('MMM D');
    });
  };
  // console.log('getDatesArray :>> ', getDatesArray());
  // ==========  duration ==================
  const duration = getDatesArray().length;
  // console.log('duration :>> ', duration);

  // ==== Массивы для построения линий графика====

  const getPlanedLine = () => {
    let arr = [];

    for (let i = 0; i < duration - planedPagesArray.length; i += 1) {
      if (arr[i] !== lastOfPlanedArray) {
        arr[i] = lastOfPlanedArray;
      }
    }
    const resultArr = [...planedPagesArray, ...arr];

    return resultArr;
  };

  const getFactLine = () => {
    let arr = [];

    for (let i = 0; i < duration - factPagesArray.length; i += 1) {
      if (arr[i] !== lastOfFactArray) {
        arr[i] = lastOfFactArray;
      }
    }
    const resultArr = [...factPagesArray, ...arr];

    return resultArr;
  };

  const chartLine = () => {
    setChartData({
      labels: [...getDatesArray()],
      datasets: [
        {
          label: 'Plan',
          fill: false,
          lineTension: 0.3,
          borderColor: '#091e3f',
          pointBackgroundColor: '#091e3f',
          pointHoverRadius: 10,
          pointRadius: 8,
          pointHitRadius: 10,
          data: [...getPlanedLine()],
        },
        {
          label: 'Act',
          fill: false,
          lineTension: 0.3,
          borderColor: '#ff6b08',
          pointBackgroundColor: '#ff6b08',
          pointHoverRadius: 10,
          pointRadius: 8,
          pointHitRadius: 10,
          data: [...getFactLine()],
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
    maintainAspectRatio: false,
  };
  return (
    <>
      <div className={css.chartBox}>
        <p className={css.title}>
          Amount of pages / Day{' '}
          <span className={css.planedPages}>{lastOfPlanedArray}</span>
        </p>
        <div className={css.lineBox}>
          <ul className={css.lineList}>
            <li className={css.lineItem}>Plan</li>
            <li className={css.lineItem}>Act</li>
          </ul>
        </div>
        <Line data={chartData} options={options} />
        <p className={css.chartValue}>Time</p>
      </div>
    </>
  );
};

export default Chart;
