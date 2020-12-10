class UserHydration {
    constructor(data) {
        this.data = data
        this.id = data.userID
        this.date = data.date
        this.numOunces = data.numOunces
    }

    avgOuncesConsumed(id) {
        const userWeek = this.data.filter(day => day.userID == id)
        const totalOunces = userWeek.reduce((acc, day) => {
            acc += day.numOunces
            return acc
        }, 0)
        return Math.round(totalOunces / userWeek.length)
    }

    returnDailyConsumption(date) {
        const day = this.data.find(day => day.date === date)
        return day.numOunces
    }

    returnWeeklyConsumption(id) {
        const currentUser = this.data.filter(day => day.userID == id)
        const weeklyIntake = {
            Sunday: currentUser[currentUser.length - 7].numOunces,
            Monday: currentUser[currentUser.length - 6].numOunces,
            Tuesday: currentUser[currentUser.length - 5].numOunces,
            Wednesday: currentUser[currentUser.length - 4].numOunces,
            Thursday: currentUser[currentUser.length - 3].numOunces,
            Friday: currentUser[currentUser.length - 2].numOunces,
            Saturday: currentUser[currentUser.length - 1].numOunces
        }
        console.log(weeklyIntake);
        return weeklyIntake

        // currentUser.reduce((acc, day) => {
        //   console.log(acc.Monday = currentUser.numOunces)
        //   return acc
        // }, {})
    }
}

if (typeof module !== 'undefined') {
    module.exports = UserHydration
}