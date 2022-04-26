import getCommonItems from '../src/exercise-1';

describe('get common items from two different array', () => {

    test('should return common items', () => {
        //GIVEN
        let numbers1 = [1, 7, 3, 4, 6, 9];
        let numbers2 = [0, 8, 7, 5, 6];
        let expected = [7, 6];

        //WHEN
        let result = getCommonItems(numbers1, numbers2);

        //THEN
        expect(result).toEqual(expected);
    });

    test('should return common items', () => {
        //GIVEN
        let words1 = ['apple', 'orange', 'banana'];
        let words2 = ['orange', 'ant'];
        let expected = ['orange'];

        //WHEN
        let result = getCommonItems(words1, words2);

        //THEN
        expect(result).toEqual(expected);
    });
});