const userRepo = new UserRepo(userData)
let currentUser = new User(userRepo.getUserData(1))
let userHydration = new UserHydration(hydrationData)


const userStepGoal = document.querySelector('.user-step-goal')
const userStrideLength = document.querySelector('.user-stride-length')
const greeting = document.querySelector('h1')
const othersStepGoal = document.querySelector('.all-users-step-goal')
const dailyWater = document.querySelector('.water-ounces')
const waterParent = document.querySelector('.parent-water')
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
  // console.log(userHydration.returnWeeklyConsumption(1))
  // console.log(waterGridDisplay)
  // let comeon = userHydration.returnWeeklyConsumption(5).forEach(item => {
  //   console.log(item)
  //    return item
  //    })

  // })
// console.log(comeon)
// console.log(waterParent)
  // const numbers = userHydration.returnWeeklyConsumption(5)
  // console.log(numbers)
  const newArray = Array.from(waterGridDisplay)
  console.log(Array.isArray(newArray))
  const please = newArray.map(function(item, index) {
    console.log(item)


     return item.append(userHydration.returnWeeklyConsumption(3)[index])
     // return item.append(comeon)
     // console.log(waterGridDisplay)

   })
   valueOf(section.water-box)
  console.log(please)


}
