import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { extendMoment } from 'moment-range';
import { Line } from 'react-chartjs-2';

import { trainingSelectors } from '../../redux/training';
import { booksSelectors } from '../../redux/books';

import css from './Chart.module.scss';

const Chart = () => {
  const [chartData, setChartData] = useState({});
  useEffect(() => {
    chartLine();
  }, []); // eslint-disable-line

  const getSelectBooks = useSelector(trainingSelectors.getSelectBooks);
  // const getResults = useSelector(trainingSelectors.getResults); // пока есть тестовый массив
  const planedBooks = useSelector(booksSelectors.getPlanBooks);
  const startDate = useSelector(trainingSelectors.selectStartDate);
  const endDate = useSelector(trainingSelectors.selectEndDate);

  // console.log('startDate :>> ', startDate);
  // console.log('endDate :>> ', endDate);

  // ===== кол-во дней
  const getResults = [
    {
      date: '2021-07-23',
      planedPages: 20,
      factPages: 70,
      stats: [
        {
          time: '12:08:26',
          pages: 25,
        },
        {
          time: '13:09:25',
          pages: 25,
        },
        {
          time: '14:10:25',
          pages: 20,
        },
      ],
    },
    {
      date: '2021-07-24',
      planedPages: 60,
      factPages: 90,
      stats: [
        {
          time: '12:08:26',
          pages: 25,
        },
        {
          time: '13:09:25',
          pages: 45,
        },
        {
          time: '14:10:25',
          pages: 20,
        },
      ],
    },
    {
      date: '2021-07-25',
      planedPages: 19,
      factPages: 50,
      stats: [
        {
          time: '12:08:26',
          pages: 25,
        },
        {
          time: '13:09:25',
          pages: 15,
        },
        {
          time: '14:10:25',
          pages: 10,
        },
      ],
    },
  ];

  // ==== общее кол-во страниц
  // const planedPagesArray = () => {
  //   return getSelectBooks.map(trainingBook => {
  //     return trainingBook.totalPages;
  //   });
  // };
  const totalPages = getSelectBooks
    .map(({ totalPages }) => totalPages)
    .reduce((acc, planedPage) => {
      return acc + planedPage;
    }, 0);
  // console.log(planedPagesArray);

  const dateNowStr = moment('2021-07-22').format('YYYY-MM-DD');

  const getResultForDay = resultsDate =>
    getResults
      .filter(({ date }) => date === resultsDate)
      .reduce((acc, { factPages }) => (acc += Number(factPages)), 0);

  const getReadedStats = ({ totalPages, endDate }) => {
    const endDateUpdate = endDate.split('-').join('');
    // console.log('endDateUpdate :>> ', endDateUpdate);

    const daysToEnd =
      +moment(endDateUpdate, 'YYYYMMDD').fromNow().split(' ')[1] + 1;
    // console.log('daysToEnd :>> ', daysToEnd);

    const avaregePgesPerDay = Math.ceil(totalPages / daysToEnd) || 0;

    const factPages = getResultForDay(dateNowStr);
    return {
      avaregePgesPerDay,
      factPages,
    };
  };

  const stats = getReadedStats({ totalPages, endDate });
  // console.log('stats :>> ', stats);

  //  ================ Пример узла диапазона моментов: ===================

  const momentArr = extendMoment(moment);
  const start = startDate;
  const end = endDate;
  const getDates = moment.range(momentArr(start), momentArr(end));
  // console.log('getDates>> ', getDates);

  const getDatesArray = () => {
    return Array.from(getDates.by('day')).map(({ _i: date }) => {
      return date;
    });
  };
  // console.log('getDatesArray :>> ', getDatesArray());
  // ===================================================================
  // ==== Массивы для построения линий графика====
  const getPlanedLine = () => {
    let arr = [];
    arr.push(stats.avaregePgesPerDay);
    return arr;
  };

  const getActLine = () => {
    let arr = [];
    arr.push(stats.factPages);
    return arr;
  };

  const chartLine = () => {
    setChartData({
      labels: ['Start', ...getDatesArray()],
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
          // data: [70, 26, 98, 75, 56],
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
          data: [...getActLine()],
        },
      ],
    });
  };

  const options = {
    // scales: {
    //   yAxis: {
    //     display: false,
    //   },
    // },
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    // responsive: false,
  };
  return (
    <>
      <div className={css.chartBox}>
        <p className={css.title}>
          Amount of pages / Day{' '}
          <span className={css.avaregePgesPerDay}>
            {stats.avaregePgesPerDay}
          </span>
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
