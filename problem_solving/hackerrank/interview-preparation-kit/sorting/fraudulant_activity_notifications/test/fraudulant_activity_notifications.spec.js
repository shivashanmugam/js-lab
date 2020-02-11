
var binarySortInsert = require('../fraudulant_activity_notifications.js').binarySortInsert;
var getTotalFraudNotifications = require('../fraudulant_activity_notifications.js').getTotalFraudNotifications;
var chai = require('../../../../../../libs/chai/chai');
var expect = chai.expect;

describe('binarySortInsert', function () {
    it('Testing binarySortInsert with different test cases', function () {
        var array = [1, 5, 10, 12, 111, 200, 1000];
        binarySortInsert(array, 50, 7);
        expect(array[4]).to.equal(50);
        expect(array.length).to.equal(8);

        binarySortInsert(array, 150, 8);
        expect(array[6]).to.equal(150);
        expect(array.length).to.equal(9);

        binarySortInsert(array, 2000, 9);
        expect(array[9]).to.equal(2000);
        expect(array.length).to.equal(10);

        binarySortInsert(array, -1, 10);
        expect(array[0]).to.equal(-1);
        expect(array.length).to.equal(11);
    })
})

describe('getTotalFraudNotifications', function () {
    it('Testing getTotalFraudNotifications with different test cases', function () {
        var array = [2,3,4,2,3,6,8,4,5]
        expect(getTotalFraudNotifications(array, 5)).to.equal(2)
    })
})


