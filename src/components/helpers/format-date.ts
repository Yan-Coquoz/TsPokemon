// new Date pour une date par default.
const formatDate = (date: Date = new Date()): string => {
  // getMonth donne le mois de janvier à 0
  return `${date.getDay()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;
};
export default formatDate;
