var getTotalSpecialStrings = require('../special_string').getTotalSpecialStrings;
var chai = require('../../../../../../libs/chai/chai');
var expect = chai.expect;

describe('getTotalSpecialStrings', function () {
    it('Testing getTotalSpecialStrings with different test cases', function () {
        expect(getTotalSpecialStrings('aaaaa')).to.equal('YES');
        dferwrnnnonkmkkwewknbqweaabbcbcccdcccaccccccabcczhijkcccddddabcdasaasdasasdabcbaba
        var str = 'aabbcbcccdcccaccccccabcczhijkcccddddabcdasaasdasasdabcbaba'
    })
})
