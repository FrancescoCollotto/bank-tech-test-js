const formatDate = () => {
  const date = new Date;
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

const invalidInput = (input) => {
  return (typeof input !== 'number' || input < 0) || (input % 1 !== 0 && input.toString().split(".")[1].length > 2);
}

module.exports = {formatDate, invalidInput};
