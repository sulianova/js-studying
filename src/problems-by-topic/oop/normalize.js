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