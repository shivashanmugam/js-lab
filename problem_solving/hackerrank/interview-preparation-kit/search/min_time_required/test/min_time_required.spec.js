var minTimeRequired = require('../min_time_required_solution_1').minTimeRequired;
var FindLCM = require('../min_time_required_solution_1').FindLCM;
var GCD = require('../min_time_required_solution_1').GCD;
var FindGCD = require('../min_time_required_solution_1').FindGCD;
var chai = require('../../../../../../libs/chai/chai')
var expect = chai.expect;



describe('GCD', function () {
    it('GCD', function () {
        expect(GCD(6,3)).to.eql(3)
        expect(GCD(2,1)).to.eql(1)
        // expect(GCD(15,10)).to.eql(5)
    })
})

describe('FindGCD', function () {
    it('FindGCD', function () {
        expect(FindGCD([3,4,5,6])).to.eql(1)
        expect(FindGCD([4,6])).to.eql(2)
        expect(FindGCD([12,16,64,400])).to.eql(4)
    })
})



describe('FindLCM', function () {
    it('FindLCM', function () {
        var array = [1, 3, 4];
        expect(FindLCM(array)).to.eql(12)
        expect(FindLCM([2,3,4])).to.eql(12)
        expect(FindLCM([2,3,4,5])).to.eql(60)
        expect(FindLCM([2,3,4,5,15])).to.eql(60)
    })
})

describe('minTimeRequired', function () {
    it('minTimeRequired', function () {
        var array = {1:1, 3:1, 4:1};
        expect(minTimeRequired(array, 10)).to.eql(7)
    })
})

