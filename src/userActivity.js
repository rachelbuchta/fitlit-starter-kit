/* eslint-disable max-len */

const UserRepo = require('./userRepo')
const userTestData = require('../test/test-user-data')
let userRepo = new UserRepo(userTestData)

class UserActivity {
    constructor(activityData) {
        this.activityData = activityData
        this.currentUser

    }

    findCurrentUser(id) {
        this.currentUser = userRepo.getUserData(id)
    }

    calculateMilesWalked(date) {
        const strideLength = this.currentUser.strideLength
        const numberOfSteps = this.activityData.filter(day => day.date === date)
            .find(user => user.userID === this.currentUser.id).numSteps
        const milesWalked = ((strideLength * numberOfSteps) / 5280).toFixed(1)
        return parseFloat(milesWalked)
    }
    returnNumberOfSteps(id, date) {
        const stepCount = this.activityData
            .filter(day => day.userID === id)
            .find(userDay => userDay.date === date)
            .numSteps

        return stepCount
    }
    returnMinutesActive(id, date) {
        const minCount = this.activityData
            .filter(day => day.userID === id)
            .find(userDay => userDay.date === date)
            .minutesActive

        return minCount
    }
    calculateAvgMinByWeek(id, date) {
        const userDays = this.activityData
            .filter(day => day.userID === id)
        const startDay = userDays.find(day => day.date === date)
        const dayIndex = userDays.indexOf(startDay)
        const week = userDays.slice(dayIndex, 7)
        const totalMins = week.reduce((acc, day) => {
            acc += day.minutesActive
            return acc
        }, 0)
        const avgMins = totalMins / 7

        return Math.round(avgMins)
    }
    exceedStepGoalCheck(date) {
        const stepGoal = this.currentUser.dailyStepGoal
        const stepsTaken = this.activityData.find(day => day.date === date).numSteps

        if (stepsTaken > stepGoal) {
            return true
        } else {
            return false
        }

    }
    getExceededStepDays(id) {
        const stepGoal = this.currentUser.dailyStepGoal
        const userDays = this.activityData.filter(day => day.userID === id)
        const daysExceeded = userDays.reduce((acc, day) => {
            if (day.numSteps > stepGoal) {
                acc.push(day.date)

            }
            return acc
        }, [])
        console.log(daysExceeded);
        return daysExceeded
    }
    findStairRecord(id) {
        const userDays = this.activityData.filter(day => day.userID === id)

        const topDay = userDays
            .map(day => day.flightsOfStairs)
            .sort((a, b) => {
                return b - a
            }).shift()

        return topDay
            // const topDay = Math.max(...topDays)
    }
}

if (typeof module !== 'undefined') {
    module.exports = UserActivity
}








// const newUserRepo = new UserRepo(userTestData)
// const newActivityRepo = new UserRepo(acivityTestData)

//         const milesWalked = ((newUserRepo.getUserData(id).strideLength * numberOfSteps.getUserData(id).numSteps) / 5280).toFixed(1)
//         return parseFloat(milesWalked)
//     }