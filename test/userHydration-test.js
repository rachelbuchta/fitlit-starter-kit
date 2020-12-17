/* eslint-disable max-len */
const chai = require('chai')
const expect = chai.expect

const UserHydration = require('../src/userHydration')
const userHydrationData = require('./test-userHydration-data')

describe('UserHydration', () => {

  let userHydration

  beforeEach(function() {

    userHydration = new UserHydration(userHydrationData)
  })

  it('should be an instance of UserHydration', () => {

    expect(userHydration).to.be.an.instanceof(UserHydration)
  })

  it('should calculate all time average ounces of water consumed per day for a user by ID', () => {

    expect(userHydration.avgOuncesConsumed(1)).to.equal(56)
    expect(userHydration.avgOuncesConsumed(3)).to.equal(57)
  })

  it('should return amount of ounces consumed in a day by date', () => {

    expect(userHydration.returnDailyConsumption(1, "2019/06/15")).to.equal(37)
    expect(userHydration.returnDailyConsumption(2, "2019/06/26")).to.equal(27)
  })

  it('should return amount of ounces consumed in a week for each day', () => {

    expect(userHydration.returnWeeklyConsumption(1, "2019/06/15")).to.deep.equal([37, 69, 96, 61, 91, 50, 50])
    expect(userHydration.returnWeeklyConsumption(2, "2019/06/22")).to.deep.equal([58, 44, 33, 67, 27, 70, 56])
  })

})
