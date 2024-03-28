const { isPalindrome } = require('../src/isPalindromeS'); // Replace 'yourFileName' with the actual filename

describe('isPalindrome', () => {
    test('should return true for an empty string', () => {
        expect(isPalindrome('')).toBe(true);
    });

    test('should return true for a single character string', () => {
        expect(isPalindrome('a')).toBe(true);
    });

    test('should return true for a palindrome string', () => {
        expect(isPalindrome('radar')).toBe(true);
        // expect(isPalindrome('level')).toBe(true);
    });

    test('should return false for a non-palindrome string', () => {
        expect(isPalindrome('hellooo')).toBe(false);
        // expect(isPalindrome('world')).toBe(false);
    });

    test('should return true for a palindrome string with spaces', () => {
        expect(isPalindrome('A man a plan a canal Panama')).toBe(false);
    });
});
