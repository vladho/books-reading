import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { extendMoment } from 'moment-range';
import { Line } from 'react-chartjs-2';

import { LangContext } from '../App/App';
import { trainingSelectors } from '../../redux/training';

import css from './Chart.module.scss';

const Chart = () => {
  const chartResults = useSelector(trainingSelectors.getChartResults);
  const startDate = useSelector(trainingSelectors.selectStartDate);
  const endDate = useSelector(trainingSelectors.selectEndDate);
  const getStartDate = useSelector(trainingSelectors.getStartDate);
  const getEndDate = useSelector(trainingSelectors.getEndDate);
  const getIsStarted = useSelector(trainingSelectors.getIsStarted);

  const { language } = useContext(LangContext);
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    chartLine();
  }, [chartResults]); // eslint-disable-line

  const getBooks = useSelector(trainingSelectors.getBooks);
  const getSelectBooks = useSelector(trainingSelectors.getSelectBooks);

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

  chartResults.map(({ date, factPages }) => {
    completeDatesObj[moment(date, 'DD-MM-YYYY').format('MMM D')] = factPages;
    return moment(date, 'DD-MM-YYYY').format('MMM D');
  });

  const duration = datesArray.length;
  // ========= !getIsStarted  =============
  const planedPagesArr = getSelectBooks.map(({ totalPages }) => {
    return totalPages;
  });
  const planedPagesSum = planedPagesArr.reduce((acc, item) => {
    return acc + item;
  }, 0);
  const planedPagesPerDay = Math.ceil(planedPagesSum / duration) || 0;

  // =========== getIsStarted ===============
  const planedPagesArrStart = getBooks.map(({ totalPages }) => {
    return totalPages;
  });
  const planedPagesSumStart = planedPagesArrStart.reduce((acc, item) => {
    return acc + item;
  }, 0);
  const planedPagesPerDayStart = Math.ceil(planedPagesSumStart / duration);
  // ================================

  const factPagesArray = getIsStarted ? Object.values(completeDatesObj) : [];

  const planedPages = chartResults.map(({ plannedPages }) => {
    return plannedPages;
  });

  const lastOfPlanedArray = getIsStarted
    ? planedPages[planedPages.length - 1] || planedPagesPerDayStart
    : planedPagesPerDay;

  const getPlanedLine = () => {
    let arr = [];

    for (let i = 0; i < duration - planedPages.length; i += 1) {
      if (arr[i] !== lastOfPlanedArray) {
        arr[i] = lastOfPlanedArray;
      }
    }
    const resultArr = [...planedPages, ...arr];

    return resultArr;
  };
  const planedPagesArray = getPlanedLine();

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
          data: [...planedPagesArray],
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
          {language.trainingPage.chart.chartY}{' '}
          <span className={css.planedPages}>{lastOfPlanedArray}</span>
        </p>
        <div className={css.lineBox}>
          <ul className={css.lineList}>
            <li className={css.lineItem}>{language.trainingPage.chart.plan}</li>
            <li className={css.lineItem}>{language.trainingPage.chart.act}</li>
          </ul>
        </div>
        <Line data={chartData} options={options} />
        <p className={css.chartValue}>{language.trainingPage.chart.chartX}</p>
      </div>
    </>
  );
};

export default Chart;
