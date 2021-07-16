import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { HiOutlineCalendar, HiChevronDown } from 'react-icons/hi';

import styles from './DatePicker.module.scss';

const DatePickerInput = ({ pickedDate, placeholderText, onChange }) => {
  return (
    <div className={styles.datePickerWrapper}>
      <DatePicker
        onChange={date => onChange(date)}
        selected={pickedDate}
        dateFormat="yyyy-MM-dd"
        placeholderText={placeholderText}
        minDate={new Date()}
        name="date"
        className={styles.datePicker}
      />
      <HiOutlineCalendar className={styles.calendarIcon} />
      <HiChevronDown className={styles.chevronDownIcon} />
    </div>
  );
};

export default DatePickerInput;
