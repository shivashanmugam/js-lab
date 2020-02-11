var sherlockValidString = require('../sherlock_valid_string').sherlockValidString;
var chai = require('../../../../../../libs/chai/chai');
var expect = chai.expect;

describe('sherlockValidString', function () {
    it('Testing sherlockValidString with different test cases', function () {
        expect(sherlockValidString('aaaaa')).to.equal('YES')
        expect(sherlockValidString('aaaaab')).to.equal('NO')
        expect(sherlockValidString('aaaaabbb')).to.equal('NO')
    })
})
