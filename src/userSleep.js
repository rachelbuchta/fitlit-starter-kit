class UserSleep {
  constructor(data) {
    this.data = data
  }


  calculateAvgHoursPerDay(id) {
    const userData = this.data.filter(day => day.userID === id)
    const totalHours = userData.reduce((acc, day) => {
      acc += day.hoursSlept
      return acc
    }, 0)
    return Math.round(totalHours / userData.length)
  }

  calculateAvgQualityPerDay(id) {
    const userData = this.data.filter(day => day.userID === id)
    const totalQuality = userData.reduce((acc, day) => {
      acc += day.sleepQuality
      return acc
    }, 0)
    return Math.round(totalQuality / userData.length)
  }

  getHoursByDay(date) {
    return this.data.find(day => day.date === date).hoursSlept
  }

  getQualityByDay(date) {
    return this.data.find(day => day.date === date).sleepQuality
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
