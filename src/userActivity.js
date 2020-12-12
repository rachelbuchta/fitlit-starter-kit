/* eslint-disable max-len */

const UserRepo = require('./userRepo')
const userTestData = require('../test/test-user-data')
let userRepo = new UserRepo(userTestData)

class UserActivity {
    constructor(data) {
        this.data = data
        this.currentUser

    }

    findCurrentUser(id) {
        this.currentUser = userRepo.getUserData(id)
    }

    calculateMilesWalked(date) {
        const strideLength = this.currentUser.strideLength
        const numberOfSteps = this.data.filter(day => day.date === date)
            .find(user => user.userID === this.currentUser.id).numSteps
        const milesWalked = ((strideLength * numberOfSteps) / 5280).toFixed(1)
        return parseFloat(milesWalked)
    }
    returnNumberOfSteps(id, date) {
        const stepCount = this.data
            .filter(day => day.userID === id)
            .find(userDay => userDay.date === date)
            .numSteps

        return stepCount
    }
    returnMinutesActive(id, date) {
        const minCount = this.data
            .filter(day => day.userID === id)
            .find(userDay => userDay.date === date)
            .minutesActive
        console.log(minCount);
        return minCount
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