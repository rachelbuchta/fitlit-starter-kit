/* eslint-disable max-len */
class UserHydration {
  constructor(data) {
    this.data = data
    this.currentUser
  }

  findUser(id) {
    this.currentUser = this.data.filter(day => day.userID === id)
  }

  avgOuncesConsumed(id) {
    this.findUser(id)
    const totalOunces = this.currentUser.reduce((acc, day) => {
      acc += day.numOunces
      return acc
    }, 0)
    return Math.round(totalOunces / this.currentUser.length)
  }

  returnDailyConsumption(id, date) {
    this.findUser(id)
    return this.currentUser.find(day => day.date === date).numOunces
  }

  returnWeeklyConsumption(id) {
    this.findUser(id)
    return this.currentUser.slice(0, 7).map(item => item.numOunces)
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserHydration
}