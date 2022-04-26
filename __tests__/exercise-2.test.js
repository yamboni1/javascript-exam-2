import getTheExactNumber from '../src/exercise-2';

describe('get the biggest number multiple of 3 from the array', () => {

    test('should return the exact number', () => {
        //GIVEN
        let numbers1 = [18, 13, 14, 27, 49];
        let expected = 27;

        //WHEN
        let result = getTheExactNumber(numbers1);

        //THEN
        expect(result).toEqual(expected);
    });
});