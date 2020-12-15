/* eslint-disable max-len */


// let userTestData = require('../test/test-user-data')
// let UserRepo = require('../src/userRepo')
// let userRepo = new UserRepo(userTestData)

class UserActivity {
    constructor(activityData) {
        this.activityData = activityData
        this.currentUser
        this.allUsersForDay
    }

    findCurrentUser(id) {
        this.currentUser = userRepo.getUserData(id)
    }

    calculateMilesWalked(id, date) {
        this.findCurrentUser(id)
        const numberOfSteps = this.activityData
            .filter(day => day.date === date)
            .find(user => user.userID === this.currentUser.id).numSteps
        return parseFloat(((this.currentUser.strideLength * numberOfSteps) / 5280).toFixed(1))
    }

    returnActivityData(id, date, type) {
        return this.activityData
            .filter(day => day.userID === id)
            .find(userDay => userDay.date === date)[type]
    }

    calculateAvgMinByWeek(id, date) {
        this.returnUserDays(id)
        const startDay = this.allUsersForDay.find(day => day.date === date)
        const dayIndex = this.allUsersForDay.indexOf(startDay)
        const week = this.allUsersForDay.slice(dayIndex, 7)
        const totalMins = week.reduce((acc, day) => {
            acc += day.minutesActive
            return acc
        }, 0)
        return Math.round(totalMins / 7)
    }

    exceedStepGoalCheck(date) {
        const stepGoal = this.currentUser.dailyStepGoal
        const stepsTaken = this.activityData.find(day => day.date === date).numSteps
        return (stepsTaken > stepGoal)
    }

    getExceededStepDays(id) {
        const stepGoal = this.currentUser.dailyStepGoal
        const userDays = this.activityData.filter(day => day.userID === id)
        return userDays.reduce((acc, day) => {
            if (day.numSteps > stepGoal) {
                acc.push(day.date)
            }
            return acc
        }, [])
    }

    returnUserDays(id) {
        this.allUsersForDay = this.activityData.filter(day => day.userID === id)
    }

    findStairRecord(id) {
        const userDays = this.activityData.filter(day => day.userID === id)
        const topDay = userDays
            .map(day => day.flightsOfStairs)
        return Math.max(...topDay)

    }

    calculateAvgActivityData(date, dataType) {
        const dayOfUsers = this.activityData.filter(day => day.date === date)
        const avgSteps = dayOfUsers.reduce((acc, user) => {
            acc += user[dataType]
            return acc
        }, 0)
        return Math.round(avgSteps / dayOfUsers.length)
    }

    getDataByWeek(id, date, type) {
        const userData = this.activityData.filter(day => day.userID === id)
        const weekSleep = userData.find(item => item.date === date)
        const index = userData.indexOf(weekSleep)
        const days = userData.slice(index, 7)
        const minsActive = days.map(day => day[type])
        return minsActive

    }
}

if (typeof module !== 'undefined') {
    module.exports = UserActivity
}