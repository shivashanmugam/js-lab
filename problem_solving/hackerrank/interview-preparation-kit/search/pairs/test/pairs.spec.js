var targetMatchingDiff = require('../pairs').targetMatchingDiff;
var frequenceCounting = require('../pairs').frequenceCounting;
var chai = require('../../../../../../libs/chai/chai')
var expect = chai.expect;

describe('frequenceCounting', function () {
    it('frequenceCounting', function () {
        var array = [1,7,4,4,6,1,6,7,6];
        expect(frequenceCounting(array)).to.eql({'1':2, '4':2, '6':3, '7':2})
    })
})


describe('targetMatchingDiff', function () {
    it('targetMatchingDiff', function () {
        var array = [1,7,4,4,6,1,6,7,6];
        expect(targetMatchingDiff(array, 2)).to.eql(2)
    })
})


