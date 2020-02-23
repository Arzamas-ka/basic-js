const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    sampleActivity <= 0 ||
    sampleActivity > MODERN_ACTIVITY ||
    typeof sampleActivity !== 'string' ||
    isNaN(parseFloat(sampleActivity))
  ) {
    return false;
  }

  let number = 0;

  if (sampleActivity.split('.').length >= 2) {
    number = parseFloat(sampleActivity);
  } else {
    number = parseInt(sampleActivity);
  }

  return Math.ceil(
    Math.log(MODERN_ACTIVITY / number) / (0.693 / HALF_LIFE_PERIOD),
  );
};