class UserRepo {
    constructor(data) {
        this.data = data
    }
    getUserData(id) {

        return this.data.find(user => user.id === id)
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