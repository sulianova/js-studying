import { format, eachDayOfInterval } from 'date-fns';
import has from 'lodash/has';

const buildRange = (dates, beginDate, endDate) => {
  const valuesByDate = dates.reduce((acc, {value, date}) => {
    return { ...acc, [date]: value };}, {});

  const period = eachDayOfInterval({
    start: new Date(beginDate),
    end: new Date(endDate)
  });

  return period.map((date) => {
    const formattedDate = format(date, 'dd.MM.yyyy');
    const value = has(valuesByDate, formattedDate) ? valuesByDate[formattedDate] : 0;
    return { value, date: formattedDate };
  });

};

export default buildRange;




