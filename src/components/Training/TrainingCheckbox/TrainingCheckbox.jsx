import cNames from 'classnames';
import css from './TrainingCheckbox.module.scss';

export default function TrainingCheckbox({ id, className, ...rest }) {
  return (
    <>
      <input
        id={id}
        type="checkbox"
        className={cNames(css.checkbox, 'visually-hidden')}
        {...rest}
      />
      <label htmlFor={id} className={cNames(css.label, className)}></label>
    </>
  );
}
