const chai = require('chai')
const expect = chai.expect

const UserActivity = require('../src/userActivity')
const userActivityData = require('./test-userActivity-data')

describe('UserActivity', () => {
  let userActivity

  beforeEach(function() {
    userActivity = new UserActivity(userActivityData)

  })

  it('should be an instance of UserActivity', () => {

    expect(userActivity).to.be.an.instanceof(UserActivity)

  })

  it('should calculate the amount of miles a user has walked by a given day', () => {

    expect(userActivity.calculateMilesWalked()).to.equal()

  })

  it('should return how many minutes active a user was for a given day', () => {

    expect(userActivity.returnMinutesActive(id, date)).to.equal()

  })

  it('should calculate average minutes active for a given week by date and ID', () => {

    expect(userActivity.calculateAvgMinByWeek(id, date)).to.equal()

  })

  it('should return all days where a user has exceeded their step goal', () => {

    expect(userActivity.getExceededStepDays(id)).to.deep.equal()

  })

  it('should return a users all time stair climbing record', () => {

    expect(userActivity.findStairRecord(id)).to.equal()

  })

  it('should calculate total steps for all users on a given date', () => {

    expect(userActivity.calculateTotalSteps(date)).to.equal()

  })

  it('should calculate average stairs climbed by all users for a given date', () => {

    expect(userActivity.calculateAvgStairsClimbed(date)).to.equal()

  })

  it('should calculate total minutes active between all users for a given date', () => {

    expect(userActivity.calculateAllMinActive(date)).to.equal()

  })

})
