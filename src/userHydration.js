class UserHydration {
  constructor(data) {
    this.data = data
    this.id = data.userID
    this.date = data.date
    this.numOunces = data.numOunces
  }

  avgOuncesConsumed(id) {
    const userWeek = this.data.filter(day => day.userID == id)
    const totalOunces = userWeek.reduce((acc, day) => {
     acc += day.numOunces
     return acc
    },0)
    return Math.round(totalOunces / userWeek.length)
  }
}

if(typeof module !== 'undefined') {
  module.exports = UserHydration
}
