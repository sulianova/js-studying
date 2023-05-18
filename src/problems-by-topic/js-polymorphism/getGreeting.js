class Guest {
  constructor() {
    this.type = 'guest';
    this.name = 'Guest';
  }

  getName() {
    return this.name;
  }

  getTypeName() {
    return this.type;
  }
}

class User {
  constructor(name) {
    this.type = 'user';
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getTypeName() {
    return this.type;
  }
}

const mapping = {
  guest: (guest) => `Nice to meet you ${guest.getName()}!`,
  user: (user) => `Hello ${user.getName()}!`,
};

export default (someUser) => (
  mapping[someUser.getTypeName()](someUser)
);