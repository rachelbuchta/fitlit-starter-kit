const userRepo = new UserRepo(userData)
let currentUser = new User(userRepo.getUserData(1))
let userHydration = new UserHydration(hydrationData)
let userSleep = new UserSleep(sleepData)


const userStepGoal = document.querySelector('.user-step-goal')
const userStrideLength = document.querySelector('.user-stride-length')
const greeting = document.querySelector('h1')
const othersStepGoal = document.querySelector('.all-users-step-goal')
const dailyWater = document.querySelector('.water-ounces')
const waterGridDisplay = document.querySelectorAll('.water-grid-box')

window.addEventListener('load', displayUserInfo)


function displayUserInfo() {
  displayGreeting()
  displayUserStepGoal()
  displayUserStrideLength()
  displayAllUsersStepGoal()
  displayDailyWaterIntake()
  displayWeeklyWaterIntake()
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

  dailyWater.innerHTML = `${userHydration.returnDailyConsumption("2019/06/15")} OZs.`
}

function displayWeeklyWaterIntake() {

  const weekDisplay = Array.from(waterGridDisplay)
  const populateWeeklyData = weekDisplay.map(function(item, index) {
  return item.append(userHydration.returnWeeklyConsumption(1)[index])

   })

}
