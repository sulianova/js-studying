export default (users) => {
  const friendsOfUsers = users.map(({ friends }) => friends);
  return friendsOfUsers.flat().filter(({ gender }) => gender === 'female');
};
