import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from './TrainingListItem.module.scss';
import { ReactComponent as BookIcon } from '../../../assets/training/bookIcon.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/training/deleteIcon.svg';
import IconButton from '../../common/IconButton';
import TrainingCheckbox from '../TrainingCheckbox';
import { trainingActions, trainingSelectors } from '../../../redux/training';
import { LangContext } from '../../App/App';

export default function TrainingListItem({
  id,
  title,
  author,
  year,
  pages,
  status,
  placeholder,
}) {
  const { language } = useContext(LangContext);
  const dispatch = useDispatch();

  const isTrainStarted = useSelector(trainingSelectors.getIsStarted);

  return (
    <li className={css.item}>
      {isTrainStarted && !placeholder ? (
        <TrainingCheckbox
          id={id}
          checked={status === 'done'}
          readOnly
          className={css.checkbox}
        />
      ) : (
        <BookIcon className={css.bookIcon} />
      )}

      <p className={css.title}>{title}</p>
      <p className={css.author}>
        <span className={css.prefix}>
          {language.libraryPage.tableHeader.book_author}:
        </span>
        {author}
      </p>
      <p className={css.year}>
        <span className={css.prefix}>
          {language.libraryPage.tableHeader.book_year}:
        </span>
        {year}
      </p>
      <p className={css.pages}>
        <span className={css.prefix}>
          {language.libraryPage.tableHeader.book_pages}:
        </span>
        {pages}
      </p>

      {!isTrainStarted && !placeholder && (
        <IconButton
          className={css.deleteBtn}
          onClick={() => dispatch(trainingActions.delSelectedId(id))}
        >
          <DeleteIcon />
        </IconButton>
      )}
    </li>
  );
}
