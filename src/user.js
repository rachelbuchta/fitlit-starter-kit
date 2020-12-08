class User {
  constructor(userData) {
    this.userData = userData
  }

  getFirstName() {
    const firstName = this.userData.name.split(' ')
    return firstName[0]
  }
}

if (typeof module !== 'undefined') {
  module.exports = User
}
