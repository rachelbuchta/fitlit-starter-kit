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

  returnDailyConsumption(date) {
    const day = this.data.find(day => day.date === date)
    return day.numOunces
  }

  returnWeeklyConsumption(id) {
    const currentUser = this.data.filter(day => day.userID == id)
    const weeklyIntake = {Sunday: currentUser[0].numOunces,
     Monday: currentUser[1].numOunces,
     Tuesday: currentUser[2].numOunces,
     Wednesday: currentUser[3].numOunces,
     Thursday: currentUser[4].numOunces,
     Friday: currentUser[5].numOunces,
     Saturday: currentUser[6].numOunces}
     return weeklyIntake

    // currentUser.reduce((acc, day) => {
    //   console.log(acc.Monday = currentUser.numOunces)
    //   return acc
    // }, {})
  }
}

if(typeof module !== 'undefined') {
  module.exports = UserHydration
}
