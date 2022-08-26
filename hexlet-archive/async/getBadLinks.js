// ИЩЕМ БИТЫЕ ССЫЛКИ НА СТРАНИЦЕ И ВЫВОДИМ ИХ
import { URL } from 'url';
import axios from 'axios';

const extractLinks = (content) => {
  const host = 'http://localhost:8080';
  const linkRx = /href="(.+?)"/gi;
  const results = content.matchAll(linkRx);
  return Array.from(results)
    .map((r) => r[1])
    .map((rawLink) => new URL(rawLink, host).toString());
};

export default async (initialLink) => {
  const response = await axios.get(initialLink);
  const links = extractLinks(response.data);
  const promises = links.map((link) => axios
    .get(link)
    .then(() => null)
    .catch(() => link));
  const results = await Promise.all(promises);
  return results.filter((result) => result !== null);
};

// example
// const url = 'https://privet.hexlet';
// const links = await getBadLinks(url);
// console.log(links);
