export default (users, key) => users.reduce((acc, user) => {
  const keyValue = user[key];

  if (!Object.hasOwn(acc, keyValue)) {
    acc[keyValue] = [];
  }

  acc[keyValue].push(user);

  return acc;
}, {});

export const groupBy = (users, key) => users.reduce((acc, user) => {
  const keyValue = user[key];

  const group = acc[keyValue] ?? [];
  // возвращается новый объект аккумулятора
  // старый аккумулятор деструктурируется, для текущей группы записывается новый массив с данными
  // квадратные скобки нужны, чтобы указать имя группы в качестве ключа
  return { ...acc, [keyValue]: group.concat(user) };
}, {});
