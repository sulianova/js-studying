import _ from 'lodash';

export default (...rest) => {
  let resultAverage = 0;

  if (rest.length !== 0) {
    resultAverage = _.sum(rest) / rest.length;
  } else resultAverage = null;

  return resultAverage;
};
