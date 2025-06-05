export const classnames = classes => {
  const _classes = Object.keys(classes).filter(key => classes[key]);
  return _classes.join(' ');
}
