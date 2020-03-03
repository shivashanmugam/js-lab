var getTotalSpecialStrings = require('../special_string').getTotalSpecialStrings;
var chai = require('../../../../../../libs/chai/chai');
var expect = chai.expect;
var fs = require('fs')
var data = fs.readFileSync('text.txt')


describe('getTotalSpecialStrings', function () {
    it('Testing getTotalSpecialStrings with different test cases', function () {
        expect(getTotalSpecialStrings('aaaaa')).to.equal(15);
        expect(getTotalSpecialStrings('abcbaba')).to.equal(10);
        expect(getTotalSpecialStrings('mnonopoo')).to.equal(12);
        expect(getTotalSpecialStrings('asasd')).to.equal(7);
        expect(getTotalSpecialStrings('mmmoaaa')).to.equal(13);
        expect(getTotalSpecialStrings('mmmomaa')).to.equal(12);
        expect(getTotalSpecialStrings('mmmomma')).to.equal(13);
        expect(getTotalSpecialStrings('mmaoaaa')).to.equal(12);
        expect(getTotalSpecialStrings('maaoaaa')).to.equal(13);
        expect(getTotalSpecialStrings('mamaabaaacaaaba')).to.equal(30);
        expect(getTotalSpecialStrings(data)).to.equal(1272919)
    })
    
})
