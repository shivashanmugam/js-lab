var findSmallestBigInTwoArray = require('../triple_sum').findSmallestBigInTwoArray;
var eliminateNumbersBiggerThanTargetAndAlsoEliminateRedundantNumber = require('../triple_sum').eliminateNumbersBiggerThanTargetAndAlsoEliminateRedundantNumber;
var eliminateNumbersSmallerThanTargetAlsoEliminateRedundantNumber = require('../triple_sum').eliminateNumbersSmallerThanTargetAlsoEliminateRedundantNumber;
var DistinctTripletCount = require('../triple_sum').DistinctTripletCount;
var chai = require('../../../../../../libs/chai/chai')
var expect = chai.expect;

describe('findSmallestBigInTwoArray', function () {
    it('findSmallestBigInTwoArray', function () {
        var arrayA = [1,7,4,4,6,1,6,7,6];
        var arrayB = [4,5,6,7,2,5,6];
        expect(findSmallestBigInTwoArray(arrayA, arrayB)).to.eql(2)
    })
})

describe('eliminateNumbersBiggerThanTargetAndAlsoEliminateRedundantNumber', function () {
    it('eliminateNumbersBiggerThanTargetAndAlsoEliminateRedundantNumber', function () {
        var arrayA = [1,7,4,4,6,1,6,7,6];
        expect(eliminateNumbersBiggerThanTargetAndAlsoEliminateRedundantNumber(arrayA, 6)).to.eql([1,4,6])
    })
})

describe('eliminateNumbersSmallerThanTargetAlsoEliminateRedundantNumber', function () {
    it('eliminateNumbersSmallerThanTargetAlsoEliminateRedundantNumber', function () {
        var arrayA = [1,7,4,4,6,1,6,7,6];
        expect(eliminateNumbersSmallerThanTargetAlsoEliminateRedundantNumber(arrayA, 4)).to.eql([7,4,6])
    })
})


describe('DistinctTripletCount', function () {
    it('DistinctTripletCount', function () {
        var P = [3, 5, 7];
        var Q = [3, 6];
        var R = [4, 6, 9];
        expect(DistinctTripletCount(P, Q, R)).to.eql(4)
    })
    it('DistinctTripletCount', function () {
        var P = [1, 3, 5];
        var Q = [2, 3];
        var R = [1, 2, 3];
        expect(DistinctTripletCount(P, Q, R)).to.eql(8)
    })
})
