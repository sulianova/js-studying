import _ from 'lodash';

export default (users, number = 1) => {
  const sorted = _.sortBy(users, (row) => Date.parse(row.birthday));
  // const sorted = _.sortBy(users, ({ birthday }) => Date.parse(birthday));
  return sorted.slice(0, number);
};
