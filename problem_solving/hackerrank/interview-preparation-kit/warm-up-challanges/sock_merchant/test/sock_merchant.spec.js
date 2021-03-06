var getPairs = require('../sock_merchant').getPairs;
var chai = require('../../../../../../libs/chai/chai');
var expect = chai.expect;

describe('getPairs', function () {
    it('Testing getPairs with different test cases', function () {
        expect(getPairs(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])).to.equal(3);
        expect(getPairs(1, [10])).to.equal(0);
        expect(getPairs(2, [10, 10])).to.equal(1);
        expect(getPairs(3, [10, 10, 10])).to.equal(1);
        expect(getPairs(10, [10, 11, 12, 13, 11, 19, 10, 19, 19, 10])).to.equal(3);
        expect(getPairs(4, [10, 10, 10, 10])).to.equal(2);
        expect(getPairs(5, [10, 20, 20, 10, 10])).to.equal(2);
        expect(getPairs(6, [20, 20, 20, 10, 10])).to.equal(2);
        expect(getPairs(6, [20, 20, 20, 10, 10, 20])).to.equal(3);
        expect(getPairs(6, [20, 20, 20, 10, 10, 20])).to.equal(3);
        expect(getPairs(6, [20, 10, 5, 20, 10, 5])).to.equal(3);

    })
})