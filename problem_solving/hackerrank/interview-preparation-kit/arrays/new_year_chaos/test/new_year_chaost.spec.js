var newYearChaos = require('../new_year_chaos').newYearChaos;
var checkSeqValid = require('../new_year_chaos').checkSeqValid;
var swap = require('../new_year_chaos').swap;
var moveElemBetween = require('../new_year_chaos').moveElemBetween;
var chai = require('../../../../../../libs/chai/chai');
var expect = chai.expect;

describe('swap', function () {
    it('Testing swap with different test cases', function () {
        var array = [1,2,3,4];
        swap(array, 0,1)
        expect(array).to.eql([2,1,3,4]);
        swap(array, 1,3);
        expect(array).to.eql([2,4,3,1]);
        swap(array, 2,1);
        expect(array).to.eql([2,3,4,1]);
    })
})

describe('checkSeqValid', function(){
    it('Testing checkSeqValid with different test cases', function () {
        expect(checkSeqValid(2, 0)).to.be.true;
        expect(checkSeqValid(3, 0)).to.be.true;
        expect(checkSeqValid(4, 0)).to.be.false;
        expect(checkSeqValid(5, 1)).to.be.false;
        expect(checkSeqValid(5, 3)).to.be.true;
        expect(checkSeqValid(6, 1)).to.be.false;
        expect(checkSeqValid(6, 4)).to.be.true;
        expect(checkSeqValid(6, 3)).to.be.true;
        expect(checkSeqValid(6, 2)).to.be.false;
    })
})


describe('moveElementsBetween', function(){
    it('Testing moveElementsBetween with different test cases', function () {
        var array = [1,2,3,4,5];
        expect(moveElemBetween(array, 0, 2)).to.equal(2);
        expect(array).to.eql([3,1,2,4,5]);
        expect(moveElemBetween(array, 1, 4)).to.equal(3);
        expect(array).to.eql([3,5,1,2,4]);
        expect(moveElemBetween(array, 0, 1)).to.equal(1);
        expect(array).to.eql([5,3,1,2,4]);
        expect(moveElemBetween(array, 3, 4)).to.equal(1);
        expect(array).to.eql([5,3,1,4,2]);
    })
})

describe('newYearChaos', function(){
    it('Testing newYearChaos with different test cases', function () {
        expect(newYearChaos([5,2,1,4,3], 5)).to.equal('Too chaotic');
        expect(newYearChaos([3,1,2,4,5], 5)).to.equal(2);
        expect(newYearChaos([3,2,1,4,5], 5)).to.equal(3);
        expect(newYearChaos([3,4,2,1,5], 5)).to.equal(5);
        expect(newYearChaos([3,4,2,5,1], 5)).to.equal(6);
        expect(newYearChaos([3,4,2,5,7,1,6], 7)).to.equal(8);
        expect(newYearChaos([3,4,2,5,7,6,1], 7)).to.equal(9);
    })
})
