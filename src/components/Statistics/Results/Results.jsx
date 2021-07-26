import React, { useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { HiChevronDown } from 'react-icons/hi';
import { v4 as uuidv4 } from 'uuid';
import { CSSTransition } from 'react-transition-group';

import moment from 'moment';

import { LangContext } from '../../App/App';
import ResultItem from './ResultItem';
import styles from './Results.module.scss';
import trainingOperations from '../../../redux/training/trainingOperations';
import countDaysNumber from '../../../helpers/countDaysNumber';
import messages from '../../../helpers/modalMessages';
import trainingSelectors from '../../../redux/training/trainingSelectors';
import SomeMotivation from '../../ModalComponents/SomeMotivation/SomeMotivation';
import '../../../styles/animation.scss';

const Results = () => {
  const { language } = useContext(LangContext);

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [resultDate, setResultDate] = useState(null);
  const [resultPages, setResultPages] = useState('');

  const start = useSelector(trainingSelectors.getStartDate);
  const end = useSelector(trainingSelectors.getEndDate);
  const results = useSelector(trainingSelectors.getResults);
  const plannedPages = useSelector(trainingSelectors?.getTotalPages);
  const duration = countDaysNumber(start, end);

  const isShowModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const date = e.target.resultDate.value;
    const time = moment().format('h:mm:ss');
    const pages = +e.target.resultPages.value;

    if (!date || !time || !pages) {
      return;
    } else {
      dispatch(trainingOperations.addResult({ date, time, pages }));
      isShowModal();
    }
  };

  return (
    <>
      <CSSTransition
        classNames="option"
        timeout={600}
        in={showModal}
        unmountOnExit
      >
        <SomeMotivation
          showModal={showModal}
          setShowModal={setShowModal}
          message={
            resultPages <= plannedPages / duration ? messages[0] : messages[1]
          }
        />
      </CSSTransition>
      <div className={styles.resultsMainBox}>
        <h3 className={styles.resultsHeading}>
          {language.trainingPage.resultsCard.title}
        </h3>
        <div className={styles.inputLabelBox}>
          <p className={styles.inputLabel}>
            {language.trainingPage.resultsCard.date}
          </p>
          <p className={styles.inputLabel}>
            {language.trainingPage.resultsCard.pages}
          </p>
        </div>

        <div>
          <form
            onSubmit={handleSubmit}
            className={styles.form}
            autoComplete="off"
          >
            <div className={styles.inputsBox}>
              <DatePicker
                name="resultDate"
                selected={resultDate}
                onChange={date => setResultDate(date)}
                dateFormat="dd.MM.yyyy"
                minDate={new Date(start)}
                maxDate={new Date(end)}
                className={styles.formInput}
              />
              <HiChevronDown className={styles.chevronDownIcon} />
              <input
                type="number"
                name="resultPages"
                value={resultPages}
                onChange={e => setResultPages(e.target.value)}
                className={styles.formInput}
                min={1}
              />
            </div>
            <button type="submit" className={styles.formButton}>
              {language.trainingPage.resultsCard.addBtn}
            </button>
          </form>
        </div>
        {results.length > 0 && (
          <div>
            <h3 className={styles.statisticsHeading}>
              <span className={styles.horizontalBarLeft}></span>
              {language.trainingPage.statisticsCard.title}
              <span className={styles.horizontalBarRight}></span>
            </h3>
            <ul className={styles.statiscicsList}>
              {results.map(item => (
                <ResultItem
                  key={uuidv4()}
                  date={item.date}
                  time={item.time}
                  pages={item.pages}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Results;
