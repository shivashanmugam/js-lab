var getAllTriplets = require('../count_triplets').getAllTriplets;
var chai = require('../../../../../../libs/chai/chai');
var expect = chai.expect;

describe('getAllTriplets', function () {
    it('Testing getAllTriplets with different test cases', function () {
        expect(getAllTriplets([1,3,9,27], 3)).to.equal(2);
        expect(getAllTriplets([1,3], 3)).to.equal(0);
        expect(getAllTriplets([9, 27, 81], 3)).to.equal(1);
        expect(getAllTriplets([81, 9,27, 9, 27, 27, 81], 3)).to.equal(5);
        expect(getAllTriplets([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1)).to.equal(161700);
    })
})

