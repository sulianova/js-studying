const excludedAttrs = ['name', 'tagType', 'body'];

const buildAttrs = (tag) => (
Object.keys(tag)
  .filter((attr) => !excludedAttrs.includes(attr))
  .map((attr) => ` ${attr}="${tag[attr]}"`)
  .join('')
);

const mapping = {
single: (tag) => {
  const attrs = buildAttrs(tag);
  return `<${tag.name}${attrs}>`;
},
pair: (tag) => {
  const attrs = buildAttrs(tag);
  return `<${tag.name}${attrs}>${tag.body}</${tag.name}>`;
},
};

const stringify = (tag) => {
const build = mapping[tag.tagType];
return build(tag);
};

export default stringify;