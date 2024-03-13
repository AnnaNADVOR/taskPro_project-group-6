import { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import en from 'date-fns/locale/en-GB';
import sprite from '../../assets/images/sprite.svg';

import css from './Calendar.module.css';

const Calendar = ({ date, changeDate }) => {
  const getDateFormat = date => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return "'Today', MMMM dd";
    } else if (
      date.getDate() === tomorrow.getDate() &&
      date.getMonth() === tomorrow.getMonth() &&
      date.getFullYear() === tomorrow.getFullYear()
    ) {
      return "'Tomorrow', MMMM dd";
    } else {
      return 'EEEE, MMMM dd';
    }
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button type="button" className={css.button} onClick={onClick} ref={ref}>
      {value}
      <svg>
        <use href={`${sprite}#select-menu-16`} />
      </svg>
    </button>
  ));

  return (
    <DatePicker
      className={css.picker}
      locale={en}
      selected={date}
      onChange={changeDate}
      minDate={new Date()}
      dateFormat={getDateFormat(date)}
      onFocus={event => event.target.blur()}
      onKeyDown={event => event.preventDefault()}
      customInput={<CustomInput />}
    />
  );
};

export default Calendar;
