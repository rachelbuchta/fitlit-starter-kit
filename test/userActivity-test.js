/* eslint-disable max-len */
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

  it('should hold activity data for each user', () => {

    expect(userActivity.activityData).to.equal(userActivityData)

  })

  it('should have a property of currentUser that holds their data stored in userRepo', () => {

    userActivity.exceedStepGoalCheck(2, '2019/06/28', userRepo)

    expect(userActivity.currentUser).to.equal(userTestData[1])

  })

  it('should calculate the amount of miles a user has walked by a given day', () => {

    expect(userActivity.calculateMilesWalked(1, '2019/06/15', userRepo)).to.equal(2.9)
    expect(userActivity.calculateMilesWalked(3, '2019/06/28', userRepo)).to.equal(5.4)

  })

  it('should return the number of steps taken on a given day', () => {

    expect(userActivity.returnActivityData(1, '2019/06/15', 'numSteps')).to.equal('3,577')
    expect(userActivity.returnActivityData(2, '2019/06/28', 'numSteps')).to.equal('12,555')
    expect(userActivity.returnActivityData(3, '2019/06/25', 'numSteps')).to.equal('4,473')

  })

  it('should return how many minutes active a user was for a given day', () => {

    expect(userActivity.returnActivityData(1, '2019/06/15', 'minutesActive')).to.equal('140')
    expect(userActivity.returnActivityData(2, '2019/06/28', 'minutesActive')).to.equal('193')

  })

  it('should return how many flights of stairs a user has climbed in a given day', () => {

    expect(userActivity.returnActivityData(1, '2019/06/15', 'flightsOfStairs')).to.equal('16')
    expect(userActivity.returnActivityData(3, '2019/06/25', 'flightsOfStairs')).to.equal('37')

  })

  it('should calculate average minutes active for a given week by date and ID', () => {

    expect(userActivity.calculateAvgMinByWeek(3, '2019/06/22')).to.equal(197)
    expect(userActivity.calculateAvgMinByWeek(1, '2019/06/15')).to.equal(171)

  })

  it('should return true if a user exceeded their step goal for a given date', () => {

    expect(userActivity.exceedStepGoalCheck(1, '2019/06/15', userRepo)).to.equal(false)
    expect(userActivity.exceedStepGoalCheck(2, '2019/06/28', userRepo)).to.equal(true)

  })

  it('should return all days where a user has exceeded their step goal', () => {

    expect(userActivity.getExceededStepDays(1, userRepo)).to.deep.equal(['2019/06/17', '2019/06/20', '2019/06/22', '2019/06/23', '2019/06/28'])

  })

  it('should return a users all time stair climbing record', () => {

    expect(userActivity.findStairRecord(1)).to.equal(39)
    expect(userActivity.findStairRecord(3)).to.equal(46)

  })

  it('should calculate average number of steps taken for all users on a given date', () => {

    expect(userActivity.calculateAvgActivityData('2019/06/15', 'numSteps')).to.equal('5,091')

  })

  it('should calculate average stairs climbed by all users for a given date', () => {

    expect(userActivity.calculateAvgActivityData('2019/06/15', 'flightsOfStairs')).to.equal('20')

  })

  it('should calculate average number of minutes active between all users for a given date', () => {

    expect(userActivity.calculateAvgActivityData('2019/06/15', 'minutesActive')).to.equal('131')

  })

  it('should return minutes active each day for a week by date', () => {

    expect(userActivity.getDataByWeek(3, '2019/06/22', 'minutesActive')).to.deep.equal(['53', '219', '269', '158', '229', '265', '188'])
    expect(userActivity.getDataByWeek(1, '2019/06/15', 'minutesActive')).to.deep.equal(['140', '175', '168', '165', '275', '140', '135'])

  })

  it('should return number of steps each day for a week by date', () => {

    expect(userActivity.getDataByWeek(1, '2019/06/15', 'numSteps')).to.deep.equal(['3,577', '6,637', '14,329', '4,419', '8,429', '14,478', '6,760'])
    expect(userActivity.getDataByWeek(2, '2019/06/22', 'numSteps')).to.deep.equal(['3,605', '4,148', '8,568', '10,305', '11,522', '4,240', '12,555'])

  })

  it('should return number of stairs climbed each day for a week by date', () => {

    expect(userActivity.getDataByWeek(1, '2019/06/15', 'flightsOfStairs')).to.deep.equal(['16', '36', '18', '33', '2', '12', '6'])
    expect(userActivity.getDataByWeek(3, '2019/06/22', 'flightsOfStairs')).to.deep.equal(['17', '9', '45', '37', '45', '45', '19'])

  })

})
