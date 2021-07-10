export const dateToSale = (date) => {
  let year = new Date(date).getFullYear();
  let month = new Date(date).getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  let day = new Date(date).getDate();
  if (day < 10) {
    day = `0${day}`;
  }
  return `${day}/${month}/${year}`;
};
