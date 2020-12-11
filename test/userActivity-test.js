const chai = require('chai')
const expect = chai.expect

const UserActivity = require('../src/userActivity')
const userActivityData = require('./test-userActivity-data')
const UserRepo = require('../src/userRepo')
const userTestData = require('./test-user-data')

describe('UserActivity', () => {
  let userActivity
  let userRepo

  beforeEach(function() {
    userActivity = new UserActivity(userActivityData)
    userRepo = new UserRepo(userTestData)

  })

  it('should be an instance of UserActivity', () => {

    expect(userActivity).to.be.an.instanceof(UserActivity)

  })

  it('should calculate the amount of miles a user has walked by a given day', () => {

    userRepo.getUserData(1)
    //strideLength = 4.3

    expect(userActivity.calculateMilesWalked("2019/06/15")).to.equal()

  })

  it('should return the number of steps taken on a given day', () => {

    expect(userActivity.returnNumberOfSteps(1, "2019/06/15")).to.equal(3577)

  })

  it('should return how many minutes active a user was for a given day', () => {

    expect(userActivity.returnMinutesActive(1, "2019/06/15")).to.equal(140)

  })

  it('should calculate average minutes active for a given week by date and ID', () => {

    expect(userActivity.calculateAvgMinByWeek(1, "2019/06/15")).to.equal(171)

  })

  it('should return true if a user exceeded their step goal for a given date', () => {

      userRepo.getUserData(1)

      expect(userActivity.exceedStepGoalCheck(1, "2019/06/15")).to.equal(false)

  })

  it('should return all days where a user has exceeded their step goal', () => {

      userRepo.getUserData(1)

    expect(userActivity.getExceededStepDays(1)).to.deep.equal(["2019/06/17","2019/06/20"])

  })

  it('should return a users all time stair climbing record', () => {

    expect(userActivity.findStairRecord(1)).to.equal(36)

  })

  it('should calculate average number of steps taken for all users on a given date', () => {

    expect(userActivity.calculateAvgTotalSteps("2019/06/15")).to.equal(5091)

  })

  it('should calculate average stairs climbed by all users for a given date', () => {

    expect(userActivity.calculateAvgStairsClimbed("2019/06/15")).to.equal(20)

  })

  it('should calculate average number of minutes active between all users for a given date', () => {

    expect(userActivity.calculateAvgMinActive("2019/06/15")).to.equal(131)

  })

  it('should return minutes active each day for a week by date', () => {

    expect(userActivity.getDataByWeek(1, '2019/06/15', "sleepQuality")).to.deep.equal([140, 175, 168, 165, 275, 140, 135])
  })

  it('should return number of steps each day for a week by date', () => {

    expect(userActivity.getDataByWeek(1, '2019/06/15', "sleepQuality")).to.deep.equal([3577, 6637, 14329, 4419, 8429, 14478, 6760])
  })

  it('should return number of miles active each day for a week by date', () => {

    expect(userActivity.getDataByWeek(1, '2019/06/15', "sleepQuality")).to.deep.equal([])
  })

})
