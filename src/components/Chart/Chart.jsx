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
      date: '2021-07-20',
      pages: '25',
    },
    {
      date: '2021-07-22',
      pages: '50',
    },
    {
      date: '2021-07-23',
      pages: '38',
    },
    {
      date: '2021-07-23',
      pages: '42',
    },
    {
      date: '2021-07-24',
      pages: '70',
    },
  ];

  // ==== общее кол-во страниц
  const planedPagesArray = () => {
    return getSelectBooks.map(trainingBook => {
      return trainingBook.totalPages;
    });
  };
  const totalPages = planedPagesArray().reduce((acc, planedPage) => {
    return acc + planedPage;
  }, 0);
  // console.log(totalPages);

  const dateNowStr = moment().format('YYYY-MM-DD');

  // сравнение текущей даты с датой старта
  // const actualStartDate = (dateNowStr, startDate) => {
  //   return dateNowStr > startDate ? dateNowStr === startDate : startDate;
  // };
  // console.log('actualStartDate :>> ', actualStartDate());

  const getResultForDay = resultsDate =>
    getResults
      .filter(({ date }) => date === resultsDate)
      .reduce((acc, { pages }) => (acc += Number(pages)), 0);

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

  // ==== Массив дат графика====

  // const startDtUpdate = startDate.split('-').join('');
  // const endDtUpdate = endDate.split('-').join('');
  // console.log('startDtUpdate :>> ', startDtUpdate);
  // console.log('endDtUpdate :>> ', endDtUpdate);

  // const getDatesArray = (startDate, endDate) => {
  // let dateArray = [];
  //   let currentDate = moment(startDate).format('YYYY-MM-DD');
  //   const lastDate = moment(endDate).format('YYYY-MM-DD');
  //   console.log('currentDate :>> ', currentDate);
  //   console.log('lastDate :>> ', lastDate);
  // while (currentDate <= lastDate) {
  //   dateArray.push(moment(currentDate).format('YYYY-MM-DD'));
  //   currentDate = moment(currentDate).add(1, 'days');
  //     // console.log('whilecurrentDate :>> ', currentDate);
  //   }
  //   return dateArray;
  // };
  // console.log('getDatesArray :>> ', getDatesArray());

  //  ================ Пример узла диапазона моментов: ===================

  const momentArr = extendMoment(moment);
  // const start = moment(startDate).format('YYYY-MM-DD');
  // const end = moment(endDate).format('YYYY-MM-DD');
  const start = startDate;
  const end = endDate;
  const getDates = moment.range(momentArr(start), momentArr(end));
  // console.log('getDates>> ', getDates);

  const getDatesArray = () => {
    return Array.from(getDates.by('day'));
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
      // labels: ['Start', ...getDatesArray()],
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
