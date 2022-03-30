const isValidDate = (dateTimeString) => {
  const date = new Date(dateTimeString);
  return !Number.isNaN(date);
};

const isDateExpired = (dateTimeString) => {
  const now = new Date();
  const expireAt = new Date(dateTimeString);
  return expireAt < now;
};

export { isValidDate, isDateExpired };
