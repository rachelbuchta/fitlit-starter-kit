/* eslint-disable max-len */
const chai = require('chai')
const expect = chai.expect

const UserSleep = require('../src/userSleep')
const userSleepData = require('./test-userSleep-data')

describe('UserSleep', () => {
  let userSleep

  beforeEach(function() {
    userSleep = new UserSleep(userSleepData)

  })

  it('should be an instance of UserSleep', () => {

    expect(userSleep).to.be.an.instanceof(UserSleep)

  })

  it('should hold sleep data for each user', () => {

    expect(userSleep.data).to.equal(userSleepData)

  })

  it('should calculate average amount of hours slept over all days for a user', () => {

    expect(userSleep.calculateAvgDataOverAllDays(1, 'hoursSlept')).to.equal(7.8)
    expect(userSleep.calculateAvgDataOverAllDays(3, 'hoursSlept')).to.equal(7.6)
  })

  it('should calculate average sleep quality over all days for a user', () => {

    expect(userSleep.calculateAvgDataOverAllDays(3, 'sleepQuality')).to.equal(3.3)
    expect(userSleep.calculateAvgDataOverAllDays(1, 'sleepQuality')).to.equal(2.8)
  })

  it('should return amount of sleep by date', () => {

    expect(userSleep.getDataByDay(1, '2019/06/15', 'hoursSlept')).to.equal(6.1)
    expect(userSleep.getDataByDay(3, '2019/06/25', 'hoursSlept')).to.equal(6.4)
  })

  it('should get quality by date', () => {

    expect(userSleep.getDataByDay(1, '2019/06/15', 'sleepQuality')).to.equal(2.2)
    expect(userSleep.getDataByDay(3, '2019/06/25', 'sleepQuality')).to.equal(4.9)
  })

  it('should return hours slept by date for a week', () => {

    expect(userSleep.getDataByWeek(1, '2019/06/15', 'hoursSlept')).to.deep.equal([6.1, 4.1, 8, 10.4, 10.7, 9.3, 7.8])
  })

  it('should return sleep quality by date for a week', () => {

    expect(userSleep.getDataByWeek(1, '2019/06/15', 'sleepQuality')).to.deep.equal([2.2, 3.8, 2.6, 3.1, 1.2, 1.2, 4.2])
  })

  it('should calculate the average sleep quality for all users', () => {

    expect(userSleep.getOverallAvgQuality()).to.equal(3.1)
  })

  it('should find any user with an average slee quality above 3 for any given week, identified by date', () => {

    expect(userSleep.findGoodSleepers('2019/06/15')).to.deep.equal([2, 3])
  })

  it('should find who slept the most on a given day', () => {

    expect(userSleep.findTopSnoozer('2019/06/15')).to.deep.equal(3)
  })
})
