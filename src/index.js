// npx prettier --write ./src/index.js
// npx eslint --fix ./src/index.js
// export PS1="\W ($(git branch 2>/dev/null | grep '^*' | colrm 1 2)) $ "

export default str => str.split('').reverse().join('');