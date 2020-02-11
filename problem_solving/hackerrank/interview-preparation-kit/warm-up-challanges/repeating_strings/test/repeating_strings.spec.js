var getNoOf_A_inString = require('../repeating_strings').getNoOf_A_inString;
var getRepeatationofCharForEachIndexLength = require('../repeating_strings').getRepeatationofCharForEachIndexLength;
var getCharRepeatationInAString = require('../repeating_strings').getCharRepeatationInAString
var chai = require('../../../../../../libs/chai/chai');
var expect = chai.expect;

describe('getCharRepeatationInAString', function () {
    it('Testing getCharRepeatationInAString with different test cases', function () {
        expect(getCharRepeatationInAString('abca','a')).to.equal(2)
        expect(getCharRepeatationInAString('aaaaca','a')).to.equal(5)
        expect(getCharRepeatationInAString('a','a')).to.equal(1)
        expect(getCharRepeatationInAString('b','a')).to.equal(0)
    })
})

describe('getRepeatationofCharForEachIndexLength', function () {
    it('Testing getRepeatationofCharForEachIndexLength with different test cases', function () {
        expect(getRepeatationofCharForEachIndexLength('abca','a')).eql({'0' : 0, '1' : 1, '2' : 1, '3' : 1, '4' : 2});
        expect(getRepeatationofCharForEachIndexLength('abcd','a')).eql({'0' : 0, '1' : 1, '2' : 1, '3' : 1, '4' : 1});
        expect(getRepeatationofCharForEachIndexLength('ab','a')).eql({'0' : 0, '1' : 1, '2' : 1});
        expect(getRepeatationofCharForEachIndexLength('aa','a')).eql({'0' : 0, '1' : 1, '2' : 2});
        expect(getRepeatationofCharForEachIndexLength('a','a')).eql({'0' : 0, '1' : 1});
        expect(getRepeatationofCharForEachIndexLength('b','a')).eql({'0' : 0, '1' : 0});
    })
})

describe('getNoOf_A_inString', function () {
    it('Testing getNoOf_A_inString with different test cases', function () {
        expect(getNoOf_A_inString('abcac', 10)).to.equal(4);
        expect(getNoOf_A_inString('abcac', 12)).to.equal(5);
        expect(getNoOf_A_inString('ab', 10)).to.equal(5);
        expect(getNoOf_A_inString('aa', 10)).to.equal(10);
        expect(getNoOf_A_inString('aa', 13)).to.equal(13);
        expect(getNoOf_A_inString('aa', 15)).to.equal(15);
        expect(getNoOf_A_inString('bba', 16)).to.equal(5);
        expect(getNoOf_A_inString('bb', 16)).to.equal(0);
    })
})

