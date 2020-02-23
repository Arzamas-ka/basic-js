module.exports = function countCats(backyard) {
  return backyard
    .reduce((prev, next) => prev + next
    .reduce((prev, next) => {
      if (next == '^^') return (prev += 1);
      return (prev += 0);
    }, 0), 0);
};
