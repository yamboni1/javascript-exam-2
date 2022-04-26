import getNumberType from '../src/exercise-3';

describe('get the type of the number', () => {

    test('should return even number given 24', () => {
        //GIVEN
        let number = 24;
        let expected = 'even number';

        //WHEN
        let result = getNumberType(number);

        //THEN
        expect(result).toEqual(expected);
    });

    test('should return odd number given 13', () => {
        //GIVEN
        let number = 13;
        let expected = 'odd number';

        //WHEN
        let result = getNumberType(number);

        //THEN
        expect(result).toEqual(expected);
    });

    test('should return null given 0', () => {
        //GIVEN
        let number = 0;

        //WHEN
        let result = getNumberType(number);

        //THEN
        expect(result).toBeNull();
    });

    test('should return null given -10', () => {
        //GIVEN
        let number = -10;

        //WHEN
        let result = getNumberType(number);

        //THEN
        expect(result).toBeNull();
    });
});