/* eslint-disable max-len */
let userRepo = new UserRepo(userData)
let userHydration = new UserHydration(hydrationData)
let userSleep = new UserSleep(sleepData)
let userActivity = new UserActivity(activityData)
let currentUser
let dragged

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
// document.addEventListener('drag', function(event) {
//
// }, false)
// document.addEventListener('dragstart', function (event) {
//   dragged = event.target
// }, false)
//
// document.addEventListener('dragend', function(event) {
//
// }, false)
//
// document.addEventListener('dragover', function (event) {
//   event.preventDefault()
// }, false)




function displayAllData() {
  generateRandomUser()
  displayUserInfo()
  displayAllUsersAvgStepGoal()
  displayWaterData()
  displaySleepData()
  displayDailyActivityData()
  displayComparisons()
  displayWeeklyActivityData()
  displayMilesWalked()
}

function generateRandomUser() {
  const userID = Math.floor(Math.random() * 50) + 1;
  currentUser = new User(userRepo.getUserData(userID))
}

function displayUserInfo() {
  greeting.innerHTML = `Hello, ${currentUser.getFirstName()}`
  userStepGoal.innerText = currentUser.dailyStepGoal.toLocaleString()
  userStrideLength.innerText = currentUser.strideLength
}

function displayAllUsersAvgStepGoal() {
  othersStepGoal.innerText = userRepo.calculateAverageSteps()
}

function displayWaterData() {
  dailyWater.innerHTML = `${userHydration.returnDailyConsumption(currentUser.id, '2019/09/22')} OZs.`
  const weekDisplay = Array.from(waterGridDisplay)
  return weekDisplay.map(function(item, index) {
    item.append(userHydration.returnWeeklyConsumption(currentUser.id)[index])
  })
}

function displaySleepData() {
  createWeeklySleepData(hoursGridDisplay, 'hoursSlept')
  createWeeklySleepData(qualityGridDisplay, 'sleepQuality')
  createDailySleepData(dailySleepHours, currentUser.id, '2019/09/22', 'hoursSlept')
  createDailySleepData(dailySleepQuality, currentUser.id, '2019/09/22', 'sleepQuality')
  createAvgSleepData(avgDailySleep, currentUser.id, 'hoursSlept')
  createAvgSleepData(avgSleepQuality, currentUser.id, 'sleepQuality')
}

function createDailySleepData(element, id, date, dataType) {
  element.innerText = userSleep.getDataByDay(id, date, dataType)
}

function createAvgSleepData(element, id, type) {
  element.innerText = userSleep.calculateAvgDataOverAllDays(id, type)
}

function createWeeklySleepData(display, type) {
  Array.from(display)
    .map(function(item, index) {
      return item.append(userSleep.getDataByWeek(currentUser.id, '2019/09/16', type)[index])
    })
}

function displayDailyActivityData() {
  createDailyActivityData(minuteCounter, 'minutesActive', 'Minutes')
  createDailyActivityData(flightCounter, 'flightsOfStairs', 'Flights of Stairs')
  createDailyActivityData(stepCounter, 'numSteps', 'Steps')
}

function createDailyActivityData(element, dataType, descriptor) {
  element.innerText = `${userActivity.returnActivityData(currentUser.id, '2019/09/22', dataType)} ${descriptor}`
}

function createComparisonData(element, dataType) {
  element.innerText = `Today's Overall Average: ${userActivity.calculateAvgActivityData('2019/09/22', dataType)}`
}

function displayComparisons() {
  createComparisonData(stepsComparison, 'numSteps')
  createComparisonData(minutesComparison, 'minutesActive')
  createComparisonData(flightsComparison, 'flightsOfStairs')
}

function createWeeklyActivityData(element, dataType) {
  Array.from(element).map(function(item, index) {
    return item.append(userActivity.getDataByWeek(currentUser.id, '2019/09/16', dataType)[index])
  })
}

function displayWeeklyActivityData() {
  createWeeklyActivityData(stepsGridDisplay, 'numSteps')
  createWeeklyActivityData(minutesGridDisplay, 'minutesActive')
  createWeeklyActivityData(flightsGridDisplay, 'flightsOfStairs')
}

function displayMilesWalked() {
  userActivity.currentUser = userRepo.getUserData(currentUser.id)
  milesWalked.innerText = `That's the equivalent to ${userActivity.calculateMilesWalked(currentUser.id, '2019/09/22', userRepo)} miles!`
}
