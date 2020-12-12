/* eslint-disable max-len */
const chai = require('chai')
const expect = chai.expect

const User = require('../src/user')
const userTestData = require('./test-user-data')

describe('User', () => {
  let user

  beforeEach(function() {
    user = new User(userTestData[0])

  })

  it('should be an instance of User', () => {

    expect(user).to.be.an.instanceof(User)
  })

  it('should return users first name', () => {

    expect(user.getFirstName()).to.equal('Luisa')
  })
})
