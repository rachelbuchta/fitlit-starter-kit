/* eslint-disable max-len */

class UserSleep {
    constructor(data) {
        this.data = data
        this.currentUser
    }

    calculateAvgDataOverAllDays(id, type) {
        this.currentUser = this.data.filter(day => day.userID === id)
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

    getDataByDay(id, date, type) {
        this.currentUser = this.data.filter(day => day.userID === id)
        return this.currentUser.find(day => day.date === date)[type]
    }

    getDataByWeek(id, date, type) {
        this.currentUser = this.data.filter(day => day.userID === id)
        const weekSleep = this.currentUser.find(item => item.date === date)
        const index = this.currentUser.indexOf(weekSleep)
        const days = this.currentUser.slice(index, index + 7)
        const weeklyData = days.map(day => day[type])
        return weeklyData
    }

    findTopSnoozer(date) {
        const findDay = this.data.filter(day => day.date === date)
        return findDay.sort((a, b) => b.hoursSlept - a.hoursSlept).unshift()
    }


    findGoodSleepers(date) {
        const userCount = this.data.reduce((acc, day) => {
                if (!acc.includes(day.userID)) {
                    acc.push(day.userID)

                }
                return acc
            }, [])
            //
        const indexObject = this.data.find(day => day.date === date) //
        const index = this.data.indexOf(indexObject)

        const allUserWeeks = this.data.slice(index, (index + (userCount.length * 7)))

        const singleUserWeek = userCount.filter(userID => {
            const newUsersWeek = allUserWeeks.filter(day => day.userID === userID)

            const userAverage = newUsersWeek.reduce((acc, day) => {
                acc += day.sleepQuality
                return acc
            }, 0) / newUsersWeek.length
            return userAverage > 3
        })
        return singleUserWeek
    }
}



if (typeof module !== 'undefined') {
    module.exports = UserSleep
}