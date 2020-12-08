const chai = require('chai')
const expect = chai.expect;

const UserRepo = require('../src/userRepo')
const userTestData = require('./test-user-data')




describe('userRepo', () => {


    it('should be an instance of UserRepo', () => {
        const userRepo = new UserRepo(userTestData)

        expect(userRepo).to.be.an.instanceof(UserRepo)
    })
    it('should hold the data of user objects', () => {

        const userRepo = new UserRepo(userTestData)


        expect(userRepo.data).to.deep.equal(userTestData)
    })
    it('should get a users data by ID', () => {

        const userRepo = new UserRepo(userTestData)

        expect(userRepo.getUserData(3)).to.equal(userTestData[2])
    })
    it('should calculate average step goal amongst all users', () => {

        const userRepo = new UserRepo(userTestData)

        expect(userRepo.calculateAverageSteps()).to.equal(6667)
    })
})