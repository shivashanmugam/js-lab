var processInput = require('../frequency_queries').processInput;
var chai = require('../../../../../../libs/chai/chai');
var expect = chai.expect;

describe('processInput', function () {
    it('Testing processInput with different test cases', function () {
        var input = [
            {op:'0', data:1},
            {op:'1', data:1},
            {op:'2', data:1},
            {op:'0', data:1},
            {op:'0', data:1}
        ]
        expect(printOutput([1,3,9,27], 3)).to.equal(2);
    
    })
})

