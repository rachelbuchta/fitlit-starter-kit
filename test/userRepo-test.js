const chai = require('chai')
const expect = chai.expect;

const UserRepo = require('../src/userRepo')

describe('userRepo', () => {
    it('should be an instance of UserRepo', () => {
        const userRepo = new UserRepo()

        expect(userRepo).to.be.an.instanceof(UserRepo)
    })
})