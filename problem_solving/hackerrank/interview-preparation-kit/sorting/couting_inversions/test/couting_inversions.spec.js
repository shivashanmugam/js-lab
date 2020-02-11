var getTotalSwapsUsingMergeSort = require('../couting_inversions').getTotalSwapsUsingMergeSort;
var chai = require('../../../../../../libs/chai/chai');
var expect = chai.expect;

describe('getTotalSwapsUsingMergeSort', function () {
    it('Testing getTotalSwapsUsingMergeSort with different test cases', function () {
        expect(getTotalSwapsUsingMergeSort([1, 1, 1, 2, 2])).to.equal(0)
        expect(getTotalSwapsUsingMergeSort([7, 5, 3, 1])).to.equal(6)
    })
})
