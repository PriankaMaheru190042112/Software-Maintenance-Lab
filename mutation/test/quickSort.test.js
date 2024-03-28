const { quickSort } = require('../src/quickSort'); // Replace 'yourFileName' with the actual filename

describe('quickSort', () => {
    test('should correctly sort an array', () => {
        const unsortedArray = [3, 7, 2, 5, 1];
        const sortedArray = quickSort(unsortedArray);
        const expectedArray = [1, 2, 3, 5, 7];
        expect(sortedArray).toEqual(expectedArray);
    });

    test('should return an empty array if the input array is empty', () => {
        const emptyArray = [];
        const sortedArray = quickSort(emptyArray);
        expect(sortedArray).toEqual([]);
    });

    test('should return the same array if it has only one element', () => {
        const singleElementArray = [42];
        const sortedArray = quickSort(singleElementArray);
        expect(sortedArray).toEqual(singleElementArray);
    });

    test('should handle an array with repeated elements', () => {
        const arrayWithRepeatedElements = [5, 2, 7, 5, 2, 1];
        const sortedArray = quickSort(arrayWithRepeatedElements);
        const expectedArray = [1, 2, 2, 5, 5, 7];
        expect(sortedArray).toEqual(expectedArray);
    });
});
