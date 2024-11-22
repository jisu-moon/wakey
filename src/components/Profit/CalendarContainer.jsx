import { useState } from 'react';
import Calendar from 'react-calendar/dist/cjs/Calendar.js';
import {
  dateFormat,
  getDaysDifference,
  getYesterday,
} from '../../utils/dateUtils';

import * as S from '../../styles/components/Profit/CalenderContainer.style';
import 'react-calendar/dist/Calendar.css';
import { BsCalendar } from 'react-icons/bs';

export default function CalendarContainer() {
  const yesterday = getYesterday();
  const [value, onChange] = useState([yesterday, yesterday]);
  const [nowDate, setNowDate] = useState(
    `${dateFormat(yesterday)} - ${dateFormat(yesterday)}`,
  );
  const [isOpen, setIsOpen] = useState(false);

  const toggleCalendarHandle = () => setIsOpen(prev => !prev);
  const dateChangeHandler = selectedDate => {
    onChange(selectedDate);
    setIsOpen(false);
    const [start, end] = selectedDate;
    setNowDate(`${dateFormat(start)} - ${dateFormat(end)}`);
  };

  return (
    <S.Container>
      <S.DropdownButton
        onClick={toggleCalendarHandle}
        className={isOpen && 'open'}
      >
        <BsCalendar />
        <p>{nowDate},&nbsp;</p>
        <p>{getDaysDifference(value)}일간</p>
      </S.DropdownButton>
      <S.CalendarWrapper className={isOpen && 'open'}>
        <Calendar
          onChange={dateChangeHandler}
          value={value}
          selectRange
          maxDate={new Date()}
          formatDay={(locale, date) => date.getDate()}
        ></Calendar>
      </S.CalendarWrapper>
    </S.Container>
  );
}
