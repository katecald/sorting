describe("The Split Function", function() {
    it('spits an array into two halves', function() {
        var arr = [1, 2, 3, 4, 5];
        expect(split(arr)).toEqual([[1,2],[3,4,5]]);
    });
    it('spits this other array too', function() {
        var arr = [1, 2, 3, 4, 5, 6];
        expect(split(arr)).toEqual([[1,2,3],[4,5,6]]);
    });
    it('spits array, length 2', function() {
        var arr = [1, 2];
        expect(split(arr)).toEqual([[1],[2]]);
    });
});

describe("The Merge", function() {
    it('correctly merges two arrays, and outputs a sorted array', function() {
        var arrs = [[2,5,6],[1,3,4]];
        expect(merge(arrs)).toEqual([1,2,3,4,5,6]);
    });

    it('correctly merges two arrays, length 1', function() {
        var arrs = [[2],[1]];
        expect(merge(arrs)).toEqual([1,2]);
    });
});



describe("mergesort", function() {
    it('takes unsorted array and returns sorted array', function() {
        var unsorted = [89,3,2,5,6,1,3,4];
        expect(mergeSort(unsorted)).toEqual(unsorted.sort());
    });

    xit('takes unsorted array of length 2 and returns sorted array', function() {
        var unsorted = [2,1];
        expect(mergeSort(unsorted)).toEqual(unsorted.sort());
    });
});