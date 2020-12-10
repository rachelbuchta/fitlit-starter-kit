class UserSleep {
    constructor(data) {
        this.data = data
    }
    calculateAvgHoursPerDay(id) {
        const userDays = this.data.filter(day => day.userID === id)
        const totalHours = userDays.reduce((acc, day) => {
            acc += day.hoursSlept
            return acc
        }, 0)
        return Math.round(totalHours / userDays.length)
    }
}

if (typeof module !== 'undefined') {
    module.exports = UserSleep
}