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

    it('should calculate average amount of hours slept over all days', () => {

        expect(userSleep.calculateAvgHoursPerDay(1)).to.equal(8)
    })

    it.skip('should calculate average sleep quality over all days', () => {
        expect(userSleep.calculateAvgQualityPerDay(1)).to.equal(3)
    })


    it.skip('should return amount of sleep by date', () => {
        expect(userSleep.getHoursByDay('2019/06/15')).to.equal(6.1)
    })

    it.skip('should get quality by date', () => {
        expect(userSleep.getQualityByDay('2019/06/15')).to.equal(2.2)
    })

    it.skip('should return hours slept by date for a week', () => {
        expect(userSleep.getHoursByWeek(1, '2019/06/15')).to.deep.equal([6.1, 4.1, 8, 10.4, 10.7, 9.3, 7.8])
    })

    it.skip('should return sleep quality by date for a week', () => {
        expect(userSleep.getHoursByWeek(1, '2019/06/15')).to.deep.equal([2.2, 3.8, 2.6, 3.1, 1.2, 1.2, 4.2])
    })

    it.skip('should calculate the average sleep qualuty for all users', () => {

        expect(userSleep.getOverallTotal()).to.equal(3.2)

    })
    it.skip('should find any user with an average above 3 for any given week, identiifed by date', () => {

        expect(userSleep.findGoodSleepers()).to.deep.equal([2, 3])
    })
    it.skip('should find who slept the most on a given day', () => {
        expect(userSleep.findTopSnoozer("2019/06/15")).to.deep.equal(3)
    })
})