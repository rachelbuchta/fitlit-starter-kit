const chai = require('chai')
const expect = chai.expect

const User = require('../src/user')
const userTestData = require('./test-user-data')

describe('User', () => {

    it('should be an instance of User', () => {
        const user = new User(userTestData[0])

        expect(user).to.be.an.instanceof(User)
    })
    it('should return users first name', () => {

        const user = new User(userTestData[0])

        expect(user.getFirstName()).to.equal('Luisa Hane')
    })
})