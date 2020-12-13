// const UserActivity = require("./userActivity")

// const UserActivity = require("./userActivity")

/* eslint-disable max-len */
let userRepo = new UserRepo(userData)
let userHydration = new UserHydration(hydrationData)
let userSleep = new UserSleep(sleepData)
let userActivity = new UserActivity(activityData)
let currentUser = new User(userRepo.getUserData(7))


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
const minuteCounter = document.querySelector('.minute-counter')
const mileCounter = document.querySelector('.mile-counter')
const flightCounter = document.querySelector('.flight-counter')
const stepsGridDisplay = document.querySelectorAll('.steps-grid-box')
const minutesGridDisplay = document.querySelectorAll('.minutes-grid-box')
const flightsGridDisplay = document.querySelectorAll('.flights-grid-box')
const stepsComparison = document.querySelector('.step-comparison')
const minutesComparison = document.querySelector('.minute-comparison')
const flightsComparison = document.querySelector('.flight-comparison')
const milesWalked = document.querySelector('.miles-walked')



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
  displayActivityData()
  displayComparisons()
  displayWeeklyActivityData()
  displayMilesWalked()
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
    item.append(userHydration.returnWeeklyConsumption(currentUser.id)[index])
  })
}

function displaySleepData() {

  dailySleepHours.innerText = userSleep.getDataByDay('2019/06/15', 'hoursSlept')
  dailySleepQuality.innerText = userSleep.getDataByDay('2019/06/15', 'sleepQuality')
  avgDailySleep.innerText = userSleep.calculateAvgDataPerDay(currentUser.id, 'hoursSlept')
  avgSleepQuality.innerText = userSleep.calculateAvgDataPerDay(currentUser.id, 'sleepQuality')
}

function displayWeeklySleepData() {

  const hoursDisplay = Array.from(hoursGridDisplay)
  const populateWeeklyHours = hoursDisplay.map(function(item, index) {
    return item.append(userSleep.getDataByWeek(currentUser.id, '2019/06/15', 'hoursSlept')[index])
  })
  const qualityDisplay = Array.from(qualityGridDisplay)
  const populateWeeklyQuality = qualityDisplay.map(function(item, index) {
    return item.append(userSleep.getDataByWeek(currentUser.id, '2019/06/15', 'sleepQuality')[index])
  })

}

function displayActivityData() {
  stepCounter.innerText = `${userActivity.returnNumberOfSteps(currentUser.id, '2019/06/15')} Steps`
  minuteCounter.innerText = `${userActivity.returnMinutesActive(currentUser.id, '2019/06/15')} Minutes`
  flightCounter.innerText = `${userActivity.returnFlightsClimbed(currentUser.id, '2019/06/15')} Flight of Stairs`
}

function displayComparisons() {
  stepsComparison.innerText = `Overall Daily Average: ${userActivity.calculateAvgTotalSteps('2019/06/15')}`
  minutesComparison.innerText = `Overall Daily Average: ${userActivity.calculateAvgMinActive('2019/06/15')}`
  flightsComparison.innerText = `Overall Daily Average: ${userActivity.calculateAvgStairsClimbed('2019/06/15')}`
}

function displayWeeklyActivityData() {
  const stepsDisplay = Array.from(stepsGridDisplay)

  const populateWeeklySteps = stepsDisplay.map(function(item, index) {
    return item.append(userActivity.getDataByWeek(currentUser.id, '2019/06/15', 'numSteps')[index])
  })
  const minsDisplay = Array.from(minutesGridDisplay)
  const populateWeeklyMinutes = minsDisplay.map(function(item, index) {
    return item.append(userActivity.getDataByWeek(currentUser.id, '2019/06/15', 'minutesActive')[index])
  })
  const flightsDisplay = Array.from(flightsGridDisplay)
  const populateWeeklyFlights = flightsDisplay.map(function(item, index) {
    return item.append(userActivity.getDataByWeek(currentUser.id, '2019/06/15', 'flightsOfStairs')[index])
  })
}

function displayMilesWalked() {
  // const userID = userRepo.getUserData(1).id
  milesWalked.innerText = `That's the equivalent to ${userActivity.calculateMilesWalked(currentUser.id,'2019/06/15')} miles!`
}