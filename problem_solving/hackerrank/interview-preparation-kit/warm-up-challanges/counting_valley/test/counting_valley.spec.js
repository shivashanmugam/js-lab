var getPairs = require('../counting_valley').getValley;
var chai = require('../../../../../../libs/chai/chai');
var expect = chai.expect;

describe('getValley', function () {
    it('Testing getValley with different test cases', function () {
        expect(getPairs(2, ['D', 'U'])).to.equal(1)
        expect(getPairs(2, ['D', 'D'])).to.equal(0)
        expect(getPairs(4, ['U', 'D', 'D', 'U'])).to.equal(1)
        expect(getPairs(3, ['U', 'D', 'D'])).to.equal(0)
        expect(getPairs(7, ['D', 'U', 'U', 'U', 'D', 'D', 'U'])).to.equal(1)
        expect(getPairs(6, ['D', 'D', 'D', 'U', 'U', 'U'])).to.equal(1)
        expect(getPairs(6, ['D', 'U', 'D', 'U', 'D', 'U'])).to.equal(3)
        expect(getPairs(8, ['D', 'D', 'U', 'U', 'D', 'D', 'U', 'U',])).to.equal(2)
        expect(getPairs(8, ['U', 'D', 'D', 'D', 'U', 'D', 'U', 'U',])).to.equal(1)
    })
})

