// const UserActivity = require("./userActivity")

/* eslint-disable max-len */
const userRepo = new UserRepo(userData)

let userHydration = new UserHydration(hydrationData)
let userSleep = new UserSleep(sleepData)
let userActivityONe = new UserActivity(activityData)
let currentUser = new User(userRepo.getUserData(1))


const userStepGoal = document.querySelector('.user-step-goal')
const userStrideLength = document.querySelector('.user-stride-length')
const greeting = document.querySelector('h1')
const othersStepGoal = document.querySelector('.all-users-step-goal')
const dailyWater = document.querySelector('.water-ounces')
const waterGridDisplay = document.querySelectorAll('.water-grid-box')
const dailySleepHours = document.querySelector('.sleep-hour-count')
const avgDailySleep = document.querySelector('.avg-sleep-hour-count')
const dailySleepQuality = document.querySelector('.sleep-quality-count')
const avgSleepQuality = document.querySelector('.avg-sleep-quality-count')
const hoursGridDisplay = document.querySelectorAll('.hours-grid-box')
const qualityGridDisplay = document.querySelectorAll('.quality-grid-box')
const stepCounter = document.querySelector('.step-counter')
const inuteCounter = document.querySelector('.minute-counter')
const mileCounter = document.querySelector('.mile-counter')
const stepsGridDisplay = document.querySelectorAll('.step-grid-box')
const minutesGridDisplay = document.querySelectorAll('.minutes-grid-box')
const flightsGridBox = document.querySelectorAll('.minutes-grid-box')
const stepsComparison = document.querySelector('.step-comparison')
const minutesComparison = document.querySelector('.minute-comparison')
const flightsComparison = document.querySelector('.flight-comparison')



window.addEventListener('load', displayUserInfo)


function displayUserInfo() {
    displayGreeting()
    displayUserStepGoal()
    displayUserStrideLength()
    displayAllUsersStepGoal()
    displayDailyWaterIntake()
    displayWeeklyWaterIntake()
    displaySleepData()
    displayWeeklySleepData()
        // userSleep.findGoodSleepers('2019/06/18')
}

function displayGreeting() {

    greeting.innerHTML = `Hello, ${currentUser.getFirstName()}`
}

function displayUserStepGoal() {

    userStepGoal.innerText = currentUser.dailyStepGoal
}

function displayUserStrideLength() {

    userStrideLength.innerText = currentUser.strideLength
}

function displayAllUsersStepGoal() {

    othersStepGoal.innerText = userRepo.calculateAverageSteps()
}

function displayDailyWaterIntake() {

    dailyWater.innerHTML = `${userHydration.returnDailyConsumption('2019/06/15')} OZs.`
}

function displayWeeklyWaterIntake() {

    const weekDisplay = Array.from(waterGridDisplay)
    return weekDisplay.map(function(item, index) {
        item.append(userHydration.returnWeeklyConsumption(1)[index])
    })
}

function displaySleepData() {

    dailySleepHours.innerText = userSleep.getDataByDay('2019/06/15', 'hoursSlept')
    dailySleepQuality.innerText = userSleep.getDataByDay('2019/06/15', 'sleepQuality')
    avgDailySleep.innerText = userSleep.calculateAvgDataPerDay(1, 'hoursSlept')
    avgSleepQuality.innerText = userSleep.calculateAvgDataPerDay(1, 'sleepQuality')
}

function displayWeeklySleepData() {

    const hoursDisplay = Array.from(hoursGridDisplay)
    const populateWeeklyHours = hoursDisplay.map(function(item, index) {
        return item.append(userSleep.getDataByWeek(1, '2019/06/15', 'hoursSlept')[index])
    })
    const qualityDisplay = Array.from(qualityGridDisplay)
    const populateWeeklyQuality = qualityDisplay.map(function(item, index) {
        return item.append(userSleep.getDataByWeek(1, '2019/06/15', 'sleepQuality')[index])
    })

}