const countDaysNumber = (start, end) => {
  const startUnix = new Date(start.split('.').reverse().join('.')).getTime();
  const endUnix = new Date(end.split('.').reverse().join('.')).getTime();
  const days = (endUnix - startUnix) / 1000 / 60 / 60 / 24 + 1 || 0;

  return days;
};

export default countDaysNumber;
