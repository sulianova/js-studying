const mapping = {
  a: 'href',
  img: 'src',
  link: 'href',
};

const getLinks = (tags) => {
  const filteredTags = tags.filter((tag) => Object.hasOwn(mapping, tag.name));
  const links = filteredTags.map((tag) => tag[mapping[tag.name]]);

  return links;
};

export default getLinks;