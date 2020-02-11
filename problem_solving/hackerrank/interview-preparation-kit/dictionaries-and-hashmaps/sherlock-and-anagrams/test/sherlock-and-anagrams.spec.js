var sherlockAndAnagrams = require('../sherlock-and-anagrams').sherlockAndAnagrams;
var isAnagrams = require('../sherlock-and-anagrams').isAnagrams;
var getTotalSubStringAnagrams = require('../sherlock-and-anagrams').getTotalSubStringAnagrams;
var chai = require('../../../../../../libs/chai/chai');
var expect = chai.expect;

describe('isAnagrams', function () {
    it('Testing isAnagrams with different test cases', function () {
        expect(isAnagrams('c', 'c')).to.be.true;
        expect(isAnagrams('c', 'd')).to.be.false;
        expect(isAnagrams('siva', 'vasi')).to.be.true;
        expect(isAnagrams('siva', 'vass')).to.be.false;

        expect(isAnagrams('sscc', 'scsc')).to.be.true;
        expect(isAnagrams('sscc', 'scss')).to.be.false;

        expect(isAnagrams('sssc', 'scss')).to.be.true;
        expect(isAnagrams('sssc', 'scsa')).to.be.false;

        expect(isAnagrams('ssss', 'ssss')).to.be.true;
        expect(isAnagrams('ssss', 'sssss')).to.be.false;
    })
})

describe('getTotalSubStringAnagrams', function () {
    it('Testing getTotalSubStringAnagrams with different test cases', function () {
        var temp = [
            ['c', 'd', 'c', 'd'],
            ['cd', 'dc', 'cd'],
            ['cdc', 'dcd'],
            ['cdcd']
        ];

        expect(getTotalSubStringAnagrams(temp[0])).to.equal(2);
        expect(getTotalSubStringAnagrams(temp[1])).to.equal(3);
        expect(getTotalSubStringAnagrams(temp[2])).to.equal(0);
        expect(getTotalSubStringAnagrams(temp[3])).to.equal(0);

        temp = [
            ['a', 'b', 'b', 'a'],
            ['ab', 'bb', 'ba'],
            ['abb', 'bba'],
            ['abba']
        ]


        expect(getTotalSubStringAnagrams(temp[3]) + getTotalSubStringAnagrams(temp[2]) + getTotalSubStringAnagrams(temp[1]) + getTotalSubStringAnagrams(temp[0])).to.equal(4);


    })
})


// describe('sherlockAndAnagrams', function () {
//     it('Testing sherlockAndAnagrams with different test cases', function () {
//         expect(sherlockAndAnagrams([["cdcd"]])).to.equal(5);
//     })
// })

