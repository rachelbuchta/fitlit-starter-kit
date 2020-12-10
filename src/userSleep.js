class UserSleep {
  constructor(data) {
    this.data = data
  }


  calculateAvgDataPerDay(id, type) {
    const userData = this.data.filter(day => day.userID === id)
    const totalQuality = userData.reduce((acc, day) => {
      acc += day[type]
      return acc
    }, 0)
    return Math.round(totalQuality / userData.length)
  }

  getDataByDay(date, type) {
    return this.data.find(day => day.date === date)[type]
  }

  getDataByWeek(id, date, type) {
    const userData = this.data.filter(day => day.userID === id)
    const weekSleep = userData.find(item => item.date === date)
    const index = userData.indexOf(weekSleep)
    const days = userData.slice(index, 7)
    const hours = days.map(day => day[type])
    return hours
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserSleep
}
