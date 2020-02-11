var alternateCharacters = require('../alternate_characters').alternateCharacters;
var chai = require('../../../../../../libs/chai/chai');
var expect = chai.expect;

describe('alternateCharacters', function () {
    it('Testing alternateCharacters with different test cases', function () {
        expect(alternateCharacters('AABB')).to.equal(2)
    })
})
