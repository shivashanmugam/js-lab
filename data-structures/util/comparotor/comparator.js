exports.Comparator = class Comparator {
    constructor(ComparatorFunction) {
        this.compare = ComparatorFunction || Comparator.defaultComparator;
    }

    static defaultComparator(a, b) {
        if (a === b) return 0;
        return a > b ? 1 : -1;
    }

    lessThan(a, b) {
        return this.compare(a, b) < 0;
    }

    greaterThan(a, b) {
        return this.compare(a, b) > 0;
    }

    equal(a, b) {
        return this.compare(a, b) == 0;
    }

    lessThanOrEqual(a, b) {
        return this.lessThan(a, b) || this.equal(a, b);
    }

    greaterThanOrEqual(a, b){
        return this.greaterThan(a, b) || this.equal(a, b);
    }

    reverse(a, b){
        var originalFn = this.compare;
        this.compare = function(a, b){
            return originalFn(b, a);
        }
    }
}