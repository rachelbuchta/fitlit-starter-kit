/* eslint-disable max-len */
class UserSleep {
  constructor(data) {
    this.data = data
  }


  calculateAvgDataPerDay(id, type) {
    const userData = this.data.filter(day => day.userID === id)
    const totalAmount = userData.reduce((acc, day) => {
      acc += day[type]
      return acc
    }, 0)
    const average = (totalAmount / userData.length).toFixed(1)
    return parseFloat(average)
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

  getOverallAvgQuality() {
    const totalQuality = this.data.reduce((acc, day) => {
      acc += day.sleepQuality
      return acc
    }, 0)
    const averageQuality = (totalQuality / this.data.length).toFixed(1)
    return parseFloat(averageQuality)
  }

  // findGoodSleepers(date) {
  //   const foundDate = this.data.find(item => item.date === date)
  //   // console.log(foundDate)
  //   const getFirstUser = foundDate.userID
  //   const filterWithID = this.data.filter(item => item.date === date)
  //   console.log("USERID:",filterWithID)
  //   // console.log("HELLO",getFirstUser)
  //   const index = this.data.indexOf(foundDate)
  //   console.log(index)
  //   const filterAllUsersByDate = this.data.filter(day => day.date === date)
  //   console.log(filterAllUsersByDate)
  //   const index2 = filterAllUsersByDate.indexOf(foundDate)
  //   console.log(index2)
  //   // const findWeek = filterWithID.filter(item => item.date ==)
  //   // get this first day and then the next 6 days
  //   // console.log(index)
  //   // console.log(index)
  //   // console.log(this.data)
  //   const week = this.data.slice(index, foundDate.length)
  //   // console.log("WWEEKK",week)
  // }

  findTopSnoozer(date) {
    const findDay = this.data.filter(day => day.date === date)
    return findDay.sort((a, b) => b.hoursSlept - a.hoursSlept).unshift()
  }
}

// input: array of day objects
//output: array of user id's
// find the date where the week starts
// filter every user who has data for that date
//

if (typeof module !== 'undefined') {
  module.exports = UserSleep
}