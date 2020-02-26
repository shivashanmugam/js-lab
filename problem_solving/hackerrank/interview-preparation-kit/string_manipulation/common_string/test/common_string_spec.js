var generateSubstring = require('../common_string').generateSubstring;
var chai = require('../../../../../../libs/chai/chai');
var expect = chai.expect;

describe('generateSubstring', function () {
    it('Testing generateSubstring with SHINCHAN string', function () {
        var string = 'SHINCHAN'
        //generateSubstring(string, deleteAt, deleteLength, subStringStartIndex, subStringLength){
        expect(generateSubstring(string,2,3,0,5)).to.equal('SHHAN')
        expect(generateSubstring(string,2,3,0,4)).to.equal('SHHA')
        expect(generateSubstring(string,2,3,1,4)).to.equal('HHAN')
        expect(generateSubstring(string,1,5,0,3)).to.equal('SAN')
        expect(generateSubstring(string,0,6,6,2)).to.equal('AN')
        expect(generateSubstring(string,0,6,6,1)).to.equal('A')
        expect(generateSubstring(string,1,6,0,1)).to.equal('S') //first s

        string = 'HARRY';
        expect(generateSubstring(string,2,3,0,2)).to.equal('HA')
        expect(generateSubstring(string,0,0,0,2)).to.equal('HA')
        expect(generateSubstring(string,1,1,0,2)).to.equal('HR')
        
    })
})
