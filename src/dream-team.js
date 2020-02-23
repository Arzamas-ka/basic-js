module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let result = '';
  for (let member of members) {
    if (typeof member == 'string') result += member.split(' ').join('')[0];
  }
  result = result.toUpperCase().split('').sort().join('');
  return result;
};
