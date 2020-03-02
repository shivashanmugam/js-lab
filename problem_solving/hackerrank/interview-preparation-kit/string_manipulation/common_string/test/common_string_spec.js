var commonString = require('../common_string').commonString;
var chai = require('../../../../../../libs/chai/chai');
var expect = chai.expect;

describe('generateSubstring', function () {
    it('Testing Common String', function(){
        expect(commonString('ABCDEFG', 'ACDFGHI')).to.equal(5)
    })
})
