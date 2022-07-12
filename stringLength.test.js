const stringLength = require('./stringLength');

test('Check the string length', () => {
   expect(stringLength('Goodnews')).toBe(8);
});

test('Check if the string length is between 1 and 10', () => {
    expect(stringLength('Goodnewseee')).toBe('Write a string between the length of 1 and 10');
 });

 test('Check if the string length is between 1 and 10', () => {
    expect(stringLength('')).toBe('Write a string between the length of 1 and 10');
 });