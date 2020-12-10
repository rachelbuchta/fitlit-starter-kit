const userRepo = new UserRepo(userData)
let currentUser = new User(userRepo.getUserData(1))
let userHydration = new UserHydration(hydrationData)


const userStepGoal = document.querySelector('.user-step-goal')
const userStrideLength = document.querySelector('.user-stride-length')
const greeting = document.querySelector('h1')
const othersStepGoal = document.querySelector('.all-users-step-goal')
const dailyWater = document.querySelector('.water-ounces')
const waterParent = document.querySelector('.parent-water')
// const sundayWater = document.querySelector('#water-box7')
// const mondayWater = document.querySelector('#water-box8')
// const tuesdayWater = document.querySelector('#water-box9')
// const wednesdayWater = document.querySelector('#water-box10')
// const thursdayWater = document.querySelector('#water-box11')
// const fridayWater = document.querySelector('#water-box12')
// const saturdayWater = document.querySelector('#water-box13')
const waterGridDisplay = document.querySelectorAll('.water-box')

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
  let comeon = userHydration.returnWeeklyConsumption(5).forEach(item => {
    console.log(item)
     return item
     })

  // })
// console.log(comeon)
// console.log(waterParent)
  // const numbers = userHydration.returnWeeklyConsumption(5)
  // console.log(numbers)
  const newArray = Array.from(waterGridDisplay)
  console.log(Array.isArray(newArray))
  const please = newArray.map(item => {
    console.log(item)


     return item.append(userHydration.returnWeeklyConsumption(3))
     // return item.append(comeon)
     // console.log(waterGridDisplay)

   })
  console.log(please)


}


//   sundayWater.innerText = userHydration.returnWeeklyConsumption(1).Sunday
//   mondayWater.innerText = userHydration.returnWeeklyConsumption(1).Monday
//   tuesdayWater.innerText = userHydration.returnWeeklyConsumption(1).Tuesday
//   wednesdayWater.innerText = userHydration.returnWeeklyConsumption(1).Wednesday
//   thursdayWater.innerText = userHydration.returnWeeklyConsumption(1).Thursday
//   fridayWater.innerText = userHydration.returnWeeklyConsumption(1).Friday
//   saturdayWater.innerText = userHydration.returnWeeklyConsumption(1).Saturday
