const chai = require('chai')
const expect = chai.expect

// const UserRepo = require('../src/userRepo')
const UserHydration = require('../src/userHydration')
const userHydrationData = require('./test-userHydration-data')

describe('UserHydration', () => {
  let userHydration

  beforeEach(function() {
    userHydration = new UserHydration()

  })

  it.skip('should be an instance of UserHydration', () => {

    expect(userHydration).to.be.an.instanceof(UserHydration)
  })

  it.skip('should calculate all time average ounces of water consumed per day', () => {

    expect(userHydration.avgOuncesConsumed(1)).to.equal(454)
  })

  it.skip('should return amount of ounces consumed in a day by date' => {

    expect(userHydration.returnDailyConsumption("2019/06/15")).to.equal(37)
  })

  it.skip('should return amount of ounces consumed in a week for each day' => {

    expect(userHydration.returnWeeklyConsumption()).to.equal({Sunday: 50, Monday: 37, Tuesday: 69, Wednesday: 96, Thursday: 61, Friday: 91, Saturday: 50})
  })

})
