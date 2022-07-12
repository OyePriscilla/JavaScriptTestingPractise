const capitalString = require('./capitalString');

test('Convert first letter to capital', () => {
    expect(capitalString('grace')).toBe('Grace')
});