class User {
  constructor(userData) {
    this.userData = userData
    this.dailyStepGoal = userData.dailyStepGoal
  }

  getFirstName() {
    const firstName = this.userData.name.split(' ')
    return firstName[0]
  }
}

if (typeof module !== 'undefined') {
  module.exports = User
}
