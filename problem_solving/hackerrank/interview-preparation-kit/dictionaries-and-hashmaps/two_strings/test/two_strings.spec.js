var findSubStringExistOrNot = require('../two_strings').findSubStringExistOrNot;
var chai = require('../../../../../../libs/chai/chai');
var expect = chai.expect;

describe('findSubStringExistOrNot', function () {
    it('Testing findSubStringExistOrNot with different test cases', function () {
        expect(findSubStringExistOrNot({'s1' : 'siva', 's2' : 'sivashanmugam'})).to.equal('');
        
    })
})

