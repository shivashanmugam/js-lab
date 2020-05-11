var min_absolute_diff_array = require('../min_absolute_diff_array').min_absolute_diff_array;
var chai = require('../../../../../../libs/chai/chai')
var expect = chai.expect;

describe('min_absolute_diff_array', function () {
    it('min_absolute_diff_array', function () {
        var array = [7,4,6,1];
        expect(min_absolute_diff_array(array)).to.eql(1)
        expect(min_absolute_diff_array(["-59", "-36", "-13", "1", "-53", "-92", "-2", "-96", "-54", "75"])).to.eql(1)
    })
})


