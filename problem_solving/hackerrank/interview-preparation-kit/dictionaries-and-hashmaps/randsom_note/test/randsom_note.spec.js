var getPairs = require('../randsom_note').checkMagazine;
var chai = require('../../../../../../libs/chai/chai');
var expect = chai.expect;

describe('checkMagazine', function () {
    it('Testing checkMagazine with different test cases', function () {
        expect(getPairs(4, 2, ['I', 'am', 'in', 'need'], ['I', 'need'])).to.equal('Yes')
        expect(getPairs(4, 2, ['I', 'am', 'in', 'need'], ['I', 'Need'])).to.equal('No')
        expect(getPairs(1, 2, ['I'], ['I', 'Need'])).to.equal('No')
        expect(getPairs(2, 2, ['I', 'Need'], ['I', 'Need'])).to.equal('Yes')
    })
})

