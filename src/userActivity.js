/* eslint-disable max-len */

class UserActivity {
    constructor(activityData) {
        this.activityData = activityData
        this.currentUser
    }

    calculateMilesWalked(id, date, userData) {
        this.currentUser = userData.getUserData(id)
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
        const userDataByID = this.activityData.filter(day => day.userID === id)
        const startDay = userDataByID.find(day => day.date === date)
        const dayIndex = userDataByID.indexOf(startDay)
        const week = userDataByID.slice(dayIndex, dayIndex + 7)
        const totalMins = week.reduce((acc, day) => {
            acc += day.minutesActive
            return acc
        }, 0)
        return Math.round(totalMins / 7)
    }

    exceedStepGoalCheck(id, date, userData) {
        this.currentUser = userData.getUserData(id)
        const stepGoal = this.currentUser.dailyStepGoal
        const stepsTaken = this.activityData.find(day => day.date === date).numSteps
        return (stepsTaken > stepGoal)
    }

    getExceededStepDays(id, userData) {
        this.currentUser = userData.getUserData(id)
        const stepGoal = this.currentUser.dailyStepGoal
        const userDays = this.activityData.filter(day => day.userID === id)
        return userDays.reduce((acc, day) => {
            if (day.numSteps > stepGoal) {
                acc.push(day.date)
            }
            return acc
        }, [])
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
        const userDataByID = this.activityData.filter(day => day.userID === id)
        const startDay = userDataByID.find(item => item.date === date)
        const index = userDataByID.indexOf(startDay)
        const days = userDataByID.slice(index, index + 7)
        const dataForAWeek = days.map(day => day[type])
        return dataForAWeek
    }
}

if (typeof module !== 'undefined') {
    module.exports = UserActivity
}