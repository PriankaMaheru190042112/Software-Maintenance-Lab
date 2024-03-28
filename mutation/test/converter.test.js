const { forceConverter } = require('../src/converter'); // Replace 'yourFileName' with the actual filename

describe('forceConverter', () => {
    test('should convert newton to dyne and pound', () => {
        const result = forceConverter("newton", 32);
        expect(result).toEqual(["3200000.00 dyne", "7.19 pound"]);
    });

    
    test('should convert dyne to newton and pound', () => {
        const result = forceConverter("dyne", 3200000);
        expect(result).toEqual(["32.00 newton", "7.19 pound"]);
    });

    test('should convert pound to newton and dyne', () => {
        const result = forceConverter("pound", 7.21);
        expect(result).toEqual(["32.07 newton", "3207166.62 dyne"]);
    });

    test('should return "wrong input" for invalid measurement', () => {
        const result = forceConverter("invalid", 10);
        expect(result).toEqual("wrong input");
    });
});

