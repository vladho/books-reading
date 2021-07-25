import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { extendMoment } from 'moment-range';
import { Line } from 'react-chartjs-2';
import { trainingSelectors } from '../../redux/training';

import css from './Chart.module.scss';

const Chart = () => {
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    chartLine();
  }, []); // eslint-disable-line

  const getChartResults = useSelector(trainingSelectors.getChartResults);
  const startDate = useSelector(trainingSelectors.selectStartDate);
  const endDate = useSelector(trainingSelectors.selectEndDate);
  const getStartDate = useSelector(trainingSelectors.getStartDate);
  const getEndDate = useSelector(trainingSelectors.getEndDate);
  const getIsStarted = useSelector(trainingSelectors.getIsStarted);

  const momentArr = extendMoment(moment);
  const start = getIsStarted ? getStartDate : startDate;
  const end = getIsStarted ? getEndDate : endDate;
  const getDates = moment.range(momentArr(start), momentArr(end));
  const getDatesArray = () => {
    return Array.from(getDates.by('day')).map(({ _d: date }) => {
      return moment(date).format('MMM D');
    });
  };

  const datesArray = getDatesArray();
  const completeDatesObj = {};
  datesArray.map(val => {
    completeDatesObj[val] = 0;
  });

  getChartResults.map(({ date, factPages }) => {
    completeDatesObj[moment(date, 'DD-MM-YYYY').format('MMM D')] = factPages;
    return moment(date, 'DD-MM-YYYY').format('MMM D');
  });
  const factPagesArray = Object.values(completeDatesObj);

  const planedPagesArray = getChartResults.map(({ plannedPages }) => {
    return plannedPages;
  });
  const lastOfPlanedArray = planedPagesArray[planedPagesArray.length - 1];

  const duration = datesArray.length;

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

  const chartLine = () => {
    setChartData({
      labels: [...datesArray],
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
          data: [...factPagesArray],
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
