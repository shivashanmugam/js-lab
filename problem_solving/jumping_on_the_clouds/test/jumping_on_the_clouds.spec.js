var getMinJumps = require('../jumping_on_the_clouds').getMinJumps;
var chai = require('../../../libs/chai/chai');
var expect = chai.expect;
var customUtil = require('../../util/custom/custom');

describe('getMinJumps', function () {
    it('Testing getMinJumps with different test cases', function () {
        expect(getMinJumps(2, [0, 0])).to.equal(1)
        expect(getMinJumps(8, [0, 0, 1, 0, 0, 0, 1, 0])).to.equal(4)
        expect(getMinJumps(7, [0, 1, 0, 0, 0, 1, 0])).to.equal(3)
        expect(getMinJumps(3, [0, 1, 0])).to.equal(1)
        expect(getMinJumps(5, [0, 0, 0, 0, 0])).to.equal(2)
        expect(getMinJumps(6, [0, 0, 0, 0, 0, 0])).to.equal(3);
    })
})

