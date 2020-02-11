var makingAnagrams = require('../making_anagrams').makingAnagrams;
var chai = require('../../../../../../libs/chai/chai');
var expect = chai.expect;

describe('makingAnagrams', function () {
    it('Testing makingAnagrams with different test cases', function () {
        expect(makingAnagrams('cde', 'abc')).to.equal(4)
    })
})
