var getBiggest = require('../array_manipulation').getBiggest;
var chai = require('../../../../../../libs/chai/chai');
var expect = chai.expect;

describe('getBiggest', function () {
    it('Testing getBiggest with different test cases', function () {
        var operations = [{
            'start' : 1,
            'end' : 2,
            'add' : 100
        },
        {
            'start' : 2,
            'end' : 5,
            'add' : 100
        },
        {
            'start' : 3,
            'end' : 4,
            'add' : 100
        }]
        expect(getBiggest(5, operations)).to.equal(200);
        
    })
})

