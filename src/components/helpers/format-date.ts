const formatDate = (date: Date): string => {
  // getMonth donne le mois de janvier à 0
  return `${date.getDay()} / ${date.getMonth() + 1} / ${date.getFullYear()}`;
};
export default formatDate;
