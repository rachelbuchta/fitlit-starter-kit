/* eslint-disable max-len */
class UserRepo {
    constructor(data) {
        this.data = data
    }

    getUserData(id) {

        return this.data.find(user => user.id === id)
        // console.log((Object.values(id)));
        // return this.data.find(user => Object.values(user).includes(id))
            // activity repo = userID
            //user repo = id
    }

    calculateAverageSteps() {
        const totalSteps = this.data.reduce((acc, user) => {
            (acc += user.dailyStepGoal)
            return acc
        }, 0)
        return Math.round(totalSteps / this.data.length)
    }
}

if (typeof module !== 'undefined') {
    module.exports = UserRepo
}
