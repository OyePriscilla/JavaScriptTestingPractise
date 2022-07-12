const reverseString = require('./reverseString');

test('Check for reverse string', () => {
    expect(reverseString('GRACE')).toBe('ECARG');
});