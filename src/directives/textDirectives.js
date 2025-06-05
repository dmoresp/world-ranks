export const capitalize = (text = '') => {
  return String(text).charAt(0).toUpperCase() + text.slice(1);
}

export const formatNumber = (number = 0) => {
  return new Intl.NumberFormat().format(number);
}
