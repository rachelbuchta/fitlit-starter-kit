/* eslint-disable max-len */
class User {
  constructor(userData) {
    this.id = userData.id
    this.name = userData.name
    this.address = userData.address
    this.email = userData.email
    this.strideLength = userData.strideLength
    this.dailyStepGoal = userData.dailyStepGoal
  }

  getFirstName() {
    const firstName = this.name.split(' ')
    return firstName[0]
  }
}

if (typeof module !== 'undefined') {
  module.exports = User
}