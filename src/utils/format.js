import moment from 'moment';

export const dateFormat = date => {
  const format = 'YYYY/MM/DD';
  return moment(date).format(format);
};

export const daysDifference = dates => {
  const startDate = moment(dates[0]);
  const endDate = moment(dates[1]);

  const difference = Math.abs(endDate.diff(startDate, 'days'));
  return difference + 1;
};
