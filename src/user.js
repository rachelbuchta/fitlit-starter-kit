class User {
  constructor(userData) {
    this.userData = userData
    this.dailyStepGoal = userData.dailyStepGoal
    this.userData = userData
    this.id = userData.id
    this.name = userData.name
    this.address = userData.address
    this.email = userData.email
    this.strideLength = userData. strideLength
    this.dailyStepGoal = userData.dailyStepGoal
    this.friends = userData.friends

  }

  getFirstName() {
    const firstName = this.userData.name.split(' ')
    return firstName[0]
  }
}

if(typeof module !== 'undefined') {
  module.exports = User
}
