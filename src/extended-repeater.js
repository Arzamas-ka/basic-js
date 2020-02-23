module.exports = function repeater(str, options) {
  let {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator
  } = options;

  let separat = separator ? separator : '+';
  let addit = typeof addition !== 'undefined' ? addition : '';
  let addSeparator = additionSeparator ? additionSeparator : '';
  let repeat = !repeatTimes ? 1 : repeatTimes;
  let addRepeat = !additionRepeatTimes ? 1 : additionRepeatTimes;

  let result = '';

  for (let i = 0; i < repeat; i++) {
    result += str;

    for (let j = 0; j < addRepeat; j++) {
      result += addit;

      if (j < addRepeat - 1) {
        result += addSeparator;
      }
    }
    if (i < repeat - 1) {
      result += separat;
    }
  }

  return result;
};