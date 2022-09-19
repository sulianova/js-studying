import _ from 'lodash';

export default (data) => data
    .filter(({ gender }) => gender === 'male')
    .map(({ birthday }) => {
        const year = birthday.slice(0, 4);
        return year;
    }) 
    .reduce((acc, year) => {
        const count = _.get(acc, year, 0) + 1;
        return { ...acc, [year]: count };
}, {});