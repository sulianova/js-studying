// НОРМАЛИЗОВАТЬ И ОТСОТРИРОВАТЬ СЛОЖНЫЙ ОБЪЕКТ
export default (data) =>
  data
    .map(({ name, country }) => [
      country.toLowerCase().trim(),
      name.toLowerCase().trim(),
    ])
    .reduce((acc, [country, city]) => {
      if (!Object.hasOwn(acc, country)) {
        acc[country] = [];
      }
      const cities = acc[country].concat(city);
      // const cities = [...acc[country], city];
      const uniqueCities = new Set(cities);
      // Array.from(uniqueCities);
      return { ...acc, [country]: [...uniqueCities] };
    }, {});

// example
// const countries = [
//   { name: 'istanbul', country: 'turkey' },
//   { name: 'Moscow ', country: ' Russia' },
//   { name: 'iStanbul', country: 'tUrkey' },
//   { name: 'antalia', country: 'turkeY ' },
//   { name: 'samarA', country: '  ruSsiA' },
//   { name: 'Miami', country: 'usa' },
// ];

// const normalizedContries = normalize(countries);

// console.log(normalizedContries);
// {
//   russia: [
//     'moscow',
//     'samara',
//   ],
//   usa: [
//     'miami',
//   ],
// }
