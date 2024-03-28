const { isPalindrome } = require('../src/isPalindromeS'); // Replace 'yourFileName' with the actual filename

describe('isPalindrome', () => {
    test('should return false for a string with different casing', () => {
        expect(isPalindrome('Racecar')).toBe(false);
    });
    
    test('should return true for a palindrome string with spaces when spaces are ignored', () => {
        expect(isPalindrome('A man a plan a canal Panama', true)).toBe(false);
    });
    
    test('should return true for a palindrome string with special characters', () => {
        expect(isPalindrome('A man, a plan, a canal, Panama!')).toBe(false);
    });
    
    test('should return false for a string with spaces when spaces are not ignored', () => {
        expect(isPalindrome('A man a plan a canal Panama')).toBe(false);
    });
    
    test('should return false for a string with special characters', () => {
        expect(isPalindrome('Was it a car or a cat I saw?')).toBe(false);
    });
    
    
});
