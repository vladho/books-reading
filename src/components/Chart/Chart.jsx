import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import { Line } from 'react-chartjs-2';

import { trainingSelectors } from '../../redux/training';
import { booksSelectors } from '../../redux/books';

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

  const getSelectBooks = useSelector(trainingSelectors.getSelectBooks);
  // const getResults = useSelector(trainingSelectors.getResults); // пока есть тестовый массив
  const planedBooks = useSelector(booksSelectors.getPlanBooks);
  const startDate = useSelector(trainingSelectors.selectStartDate);
  const endDate = useSelector(trainingSelectors.selectEndDate);
  const { selectedIds } = useParams();

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

  // ===== кол-во дней
  const getResults = [
    {
      date: '2021-07-21',
      pages: '25',
    },
    {
      date: '2021-07-21',
      pages: '50',
    },
    {
      date: '2021-07-22',
      pages: '38',
    },
    {
      date: '2021-07-22',
      pages: '42',
    },
    {
      date: '2021-07-23',
      pages: '70',
    },
  ];
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

  const getReadedStats = ({ totalPages, startDate, endDate }) => {
    const endDateUpdate = endDate.split('-').join('');

    const daysToEnd =
      +moment(endDateUpdate, 'YYYYMMDD').fromNow().split(' ')[1] + 1;
    // console.log('daysToEnd :>> ', daysToEnd);

    const avaregePgesPerDay = totalPages / daysToEnd;
    // console.log('avaregePgesPerDay :>> ', avaregePgesPerDay);
    const factPages = getResultForDay(dateNowStr);
    return {
      avaregePgesPerDay,
      factPages,
    };
  };

  // const { avaregePgesPerDay, factPages } = getReadedStats;
  // console.log(getReadedStats);
  const stats = getReadedStats({ totalPages, endDate });
  // console.log('stats :>> ', stats);
  // ==== Массивы для построения графика====
  const getPlanedLine = avaregePgesPerDay => {
    let arr = [];
    arr.push(avaregePgesPerDay);
    return arr;
  };
  // console.log('getPlanedLine :>> ', getPlanedLine);

  // const getActLine = factPages => {
  //   let arr = [];
  //   arr.push(factPages);
  //   return arr;
  // };
  // console.log('actLine :>> ', actLine);

  const chartLine = () => {
    setChartData({
      // labels: ['Start', ...getDatesArray()[0]],
      labels: ['So', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Su'],
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
          // data: [...getPlanedLine()],
          data: plan,
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
          //   data: [...getActLine()],
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
        {/* <Line data={chartData} options={options} width={250} height={225} /> */}
        {/* <Line data={chartData} options={options} width={650} height={240} /> */}
        {/* <Line data={chartData} options={options} width={870} height={247} /> */}
        <Line data={chartData} options={options} />
        <p className={css.chartValue}>Time</p>
      </div>
    </>
  );
};

export default Chart;
