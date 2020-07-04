var solutionCharecterMap = require('../reverse_shuffle').solutionCharecterMap;
var getLexigraphicallySmallString = require('../reverse_shuffle').getLexigraphicallySmallString;
var chai = require('../../../../../../libs/chai/chai')
var expect = chai.expect;

describe('getLexigraphicallySmallString', function () {
    it('getLexigraphicallySmallString', function () {
        console.log(getLexigraphicallySmallString('eggegg', 'e', 3, solutionCharecterMap('eggegg'),3))
    })
})
