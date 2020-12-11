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
    }, 0)
    return Math.round(totalOunces / userWeek.length)
  }

  returnDailyConsumption(date) {
    const day = this.data.find(day => day.date === date)
    return day.numOunces
  }

  returnWeeklyConsumption(id) {
    const currentUser = this.data.filter(day => day.userID == id)
    const week = currentUser.slice(0, 7).map(item => {
      return item.numOunces
    })
    return week
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserHydration
}
