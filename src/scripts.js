
const userRepo = new UserRepo(userData)
let currentUser = new User(userRepo.getUserData(4))


    const userStepGoal = document.querySelector('.user-step-goal')
    const userStrideLength = document.querySelector('.user-stride-length')
    const greeting = document.querySelector('h1')
    const othersStepGoal = document.querySelector('.all-users-step-goal')

    window.addEventListener('load', displayUserInfo)


    function displayUserInfo() {
      displayGreeting()
      displayUserStepGoal()
      displayUserStrideLength()
      displayAllUsersStepGoal()
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
