var getFlavIndex = require('../ice_cream_parlour').getFlavIndex;
var chai = require('../../../../../../libs/chai/chai')
var expect = chai.expect;

describe('getFlavIndex', function () {
    it('getFlavIndex', function () {
        var array = [7,4,6,1];
        expect(getFlavIndex(4,5,[1, 4, 5, 3, 2])).to.eql({i:1,j:4})
    })
})


