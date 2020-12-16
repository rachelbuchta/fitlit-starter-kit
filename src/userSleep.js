/* eslint-disable max-len */
class UserSleep {
  constructor(data) {
    this.data = data
    this.currentUser
  }

  calculateAvgDataPerDay(id, type) {
    this.findDay(id)
    const totalAmount = this.currentUser.reduce((acc, day) => {
      acc += day[type]
      return acc
    }, 0)
    return parseFloat((totalAmount / this.currentUser.length).toFixed(1))
  }

  getOverallAvgQuality() {
    const totalQuality = this.data.reduce((acc, day) => {
      acc += day.sleepQuality
      return acc
    }, 0)
    return parseFloat((totalQuality / this.data.length).toFixed(1))
  }

  getDataByDay(date, type) {
    // return this.data.find(day => day.date === date)[type]
    console.log(this.data.find(day => day.date === date)[type])
    return this.data.find(day => day.date === date)[type]
  }

  getDataByWeek(id, date, type) {
    this.findDay(id)
    const weekSleep = this.currentUser.find(item => item.date === date)
    const index = this.currentUser.indexOf(weekSleep)
    const days = this.currentUser.slice(index, 7)
    const weeklyData = days.map(day => day[type])
    return weeklyData
  }

  findTopSnoozer(date) {
    const findDay = this.data.filter(day => day.date === date)
    return findDay.sort((a, b) => b.hoursSlept - a.hoursSlept).unshift()
  }

  findDay(id) {
    this.currentUser = this.data.filter(day => day.userID === id)
  }
}

// findGoodSleepers(date) {

      //
  		// const dates = this.data.map(el => el.sleepData)
      // console.log(dates)
  		// const newDates = dates.map(el => el.concat())
  		// console.log(newDates)
  		// const allSleep = this.userSleepData.map(el => el.sleepData);
  		// // console.log(allSleep)
  		// allSleep.reduce(function(a,b) {
  		// 	const sleepDates = b.filter(el => dates.push(el.date))
  		// 	return a
  		// }, [])
  		// console.log(dates)
  		// const startDate = dates.findIndex(el => el === date)
  		// const dateRange = allSleep.slice(startDate, startDate+7).map(el => el.sleepQuality <3)
  		// console.log(dateRange)
  		//   this.data.filter(function(el) {
  		// 	let values = Object.values(el.data)
  		// 	let num = values.findIndex(el => el.date === date)
  		// 	let week = values.slice(num, num+7)
      //
  		// 	let sleepQualitySum = week.reduce((acc,curr) => {
      //
  		// 		acc += curr.sleepQuality
  		// 		return acc
  		// 	},0)
  		// 	let weekAvg = sleepQualitySum/7
  		// 	return weekAvg > 3
      //
  		// }).map(el => el.userID)
  		// console.log(findGoodSleepers())
// const final = this.data.reduce((acc, user) => {
  // const final = this.data.filter(day => day.date === date)[0]
  // console.log(final)
    // console.log(final)
    // const userIndex = this.data.indexOf(this.data.find(day => day.date === date))[0]
    // console.log(userIndex)
  //   const userIDData = findDate
  //   // console.log(userIDData);
  //   const filterData = this.data.filter(day => day.userID === findDate)
  //   console.log(filterData)
  //   const userWeek = filterData.slice(userIndex, 7)
  //   const avgQualityRough = userWeek.reduce((acc, day) => {
  //     acc += day.sleepQuality
  //     return acc
  //   }, 0)
  //   if ((avgQualityRough / 7) > 3) {
  //     acc.push(user.userID)
  //   }
  //
  // return acc

// }
// findDate ++

  // }




// }


// Find all users who average a sleep quality greater than 3 for a given week (7 days) - you should be able to calculate this for any week, not just the latest week

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


// input: array of day objects
//output: array of user id's
// find the date where the week starts
// filter every user who has data for that date
//

if (typeof module !== 'undefined') {
  module.exports = UserSleep
}
