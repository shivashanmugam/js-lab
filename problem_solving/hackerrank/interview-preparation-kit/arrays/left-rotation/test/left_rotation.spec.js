var getArrayAfterRotations = require('../../left-rotation/left_rotation').getArrayAfterRotations;
var chai = require('../../../../../../libs/chai/chai');
var expect = chai.expect;

describe('getArrayAfterRotations', function () {
    it('Testing getArrayAfterRotations with different test cases', function () {
        expect(getArrayAfterRotations([1,2,3,4,5], 5,4)).to.equal('5 1 2 3 4 ');
    })
})

