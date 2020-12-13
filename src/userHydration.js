/* eslint-disable max-len */
class UserHydration {
    constructor(data) {
        this.data = data
        this.id = data.userID
        this.date = data.date
        this.numOunces = data.numOunces
        this.currentUser
    }

    avgOuncesConsumed(id) {
        this.findUser(id)
        const totalOunces = this.currentUser.reduce((acc, day) => {
            acc += day.numOunces
            return acc
        }, 0)
        return Math.round(totalOunces / this.currentUser.length)
    }

    returnDailyConsumption(id, date) {
        this.findUser(id)
        const day = this.currentUser.find(day => day.date === date)
        return day.numOunces
    }

    returnWeeklyConsumption(id) {
        this.findUser(id)
        const week = this.currentUser.slice(0, 7).map(item => {
            return item.numOunces
        })
        return week
    }
    findUser(id) {
        this.currentUser = this.data.filter(day => day.userID === id)
    }
}

if (typeof module !== 'undefined') {
    module.exports = UserHydration
}