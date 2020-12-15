/* eslint-disable max-len */
let userRepo = new UserRepo(userData)
let userHydration = new UserHydration(hydrationData)
let userSleep = new UserSleep(sleepData)
let userActivity = new UserActivity(activityData)
let currentUser = new User(userRepo.getUserData(34))


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
const flightCounter = document.querySelector('.flight-counter')
const stepsGridDisplay = document.querySelectorAll('.steps-grid-box')
const minutesGridDisplay = document.querySelectorAll('.minutes-grid-box')
const flightsGridDisplay = document.querySelectorAll('.flights-grid-box')
const stepsComparison = document.querySelector('.step-comparison')
const minutesComparison = document.querySelector('.minute-comparison')
const flightsComparison = document.querySelector('.flight-comparison')
const milesWalked = document.querySelector('.miles-walked')


window.addEventListener('load', displayAllData)


function displayAllData() {
  displayUserInfo()
  displayAllUsersStepGoal()
  displayWaterData()
  displaySleepData()
  displayActivityData()
  displayComparisons()
  displayWeeklyActivityData()
  displayMilesWalked()
}


function displayUserInfo() {
  greeting.innerHTML = `Hello, ${currentUser.getFirstName()}`
  userStepGoal.innerText = currentUser.dailyStepGoal
  userStrideLength.innerText = currentUser.strideLength
}

function displayAllUsersStepGoal() {
  othersStepGoal.innerText = userRepo.calculateAverageSteps()
}

function displayWaterData() {
  dailyWater.innerHTML = `${userHydration.returnDailyConsumption(currentUser.id, '2019/06/15')} OZs.`
  const weekDisplay = Array.from(waterGridDisplay)
  return weekDisplay.map(function(item, index) {
    item.append(userHydration.returnWeeklyConsumption(currentUser.id)[index])
  })
}

function createDailySleepData(element, identifier, type) {
  element.innerText = userSleep.getDataByDay(identifier, type)
}

function createAvgSleepData(element, identifier, type) {
  element.innerText = userSleep.calculateAvgDataPerDay(identifier, type)
}

function createWeeklySleepData(display, type) {
  Array.from(display)
    .map(function(item, index) {
      return item.append(userSleep.getDataByWeek(currentUser.id, '2019/06/15', type)[index])
    })
}

function displaySleepData() {
  createWeeklySleepData(hoursGridDisplay, 'hoursSlept')
  createWeeklySleepData(qualityGridDisplay, 'sleepQuality')
  createDailySleepData(dailySleepHours, '2019/06/15', 'hoursSlept')
  createDailySleepData(dailySleepQuality, '2019/06/15', 'sleepQuality')
  createAvgSleepData(avgDailySleep, currentUser.id, 'hoursSlept')
  createAvgSleepData(avgSleepQuality, currentUser.id, 'sleepQuality')
}

function createActivityData(element, dataType, descriptor) {
  element.innerText = `${userActivity.returnActivityData(currentUser.id, '2019/06/15', dataType)} ${descriptor}`
}

function displayActivityData() {
  createActivityData(minuteCounter, 'minutesActive', 'Minutes')
  createActivityData(flightCounter, 'flightsOfStairs', 'Flights of Stairs')
  createActivityData(stepCounter, 'numSteps', 'Steps')
}

function createComparisonData(element, dataType) {
  element.innerText = `Today's Overall Average: ${userActivity.calculateAvgActivityData('2019/06/15', dataType)}`
}

function displayComparisons() {
  createComparisonData(stepsComparison, 'numSteps')
  createComparisonData(minutesComparison, 'minutesActive')
  createComparisonData(flightsComparison, 'flightsOfStairs')
}

function createWeeklyActivityData(element, dataType) {
  Array.from(element).map(function(item, index) {
    return item.append(userActivity.getDataByWeek(currentUser.id, '2019/06/15', dataType)[index])
  })
}

function displayWeeklyActivityData() {
  createWeeklyActivityData(stepsGridDisplay, 'numSteps')
  createWeeklyActivityData(minutesGridDisplay, 'minutesActive')
  createWeeklyActivityData(flightsGridDisplay, 'flightsOfStairs')
}

function displayMilesWalked() {
  userActivity.currentUser = userRepo.getUserData(currentUser.id)
  milesWalked.innerText = `That's the equivalent to ${userActivity.calculateMilesWalked(currentUser.id, '2019/06/15', userRepo)} miles!`
}
