var Comparator = require('../comparator').Comparator;
var chai = require('../../../../libs/chai/chai');
var expect = chai.expect;
var assert = chai.assert;

describe('Comparator()', function () {

    it('Creates with default comparator function and verifies the methods', function () {
        var my_comparator = new Comparator();
        assert('compare' in my_comparator);
        assert.equal(my_comparator.equal(0, 0), true);
        assert.equal(my_comparator.equal(1, 0), false);
        assert.equal(my_comparator.equal('a', 'a'), true);
        assert.equal(my_comparator.lessThan(0, 1), true);
        assert.equal(my_comparator.lessThan(1, 0), false);
        assert.equal(my_comparator.lessThan(1, 1), false);
        assert.equal(my_comparator.lessThan('a', 'b'), true);
        assert.equal(my_comparator.lessThan('a', 'ab'), true);
        assert.equal(my_comparator.greaterThan(1, 0), true);
        assert.equal(my_comparator.greaterThan(1, 2), false);
        assert.equal(my_comparator.greaterThan(1, 1), false);
        assert.equal(my_comparator.lessThanOrEqual(0, 1), true);
        assert.equal(my_comparator.lessThanOrEqual(1, 1), true);
        assert.equal(my_comparator.lessThanOrEqual(2, 1), false);
        assert.equal(my_comparator.greaterThanOrEqual(2, 1), true);
        assert.equal(my_comparator.greaterThanOrEqual(2, 2), true);
        assert.equal(my_comparator.greaterThanOrEqual(2, 3), false);
    })

    it('Creates a instance with custom comparator function and verifies the methods', function () {
        const comparator = new Comparator((a, b) => {
            if (a.length === b.length) {
              return 0;
            }
      
            return a.length < b.length ? -1 : 1;
          });
          expect(comparator.equal('a', 'b')).to.be.true;
          expect(comparator.equal('a', '')).to.be.false;
          expect(comparator.lessThan('b', 'aa')).to.be.true;
          expect(comparator.greaterThanOrEqual('a', 'aa')).to.be.false;
          expect(comparator.greaterThanOrEqual('aa', 'a')).to.be.true;
          expect(comparator.greaterThanOrEqual('a', 'a')).to.be.true;
      
          comparator.reverse();
      
          expect(comparator.equal('a', 'b')).to.be.true;
          expect(comparator.equal('a', '')).to.be.false;
          expect(comparator.lessThan('b', 'aa')).to.be.false;
          expect(comparator.greaterThanOrEqual('a', 'aa')).to.be.true;
          expect(comparator.greaterThanOrEqual('aa', 'a')).to.be.false;
          expect(comparator.greaterThanOrEqual('a', 'a')).to.be.true;
    })
});
