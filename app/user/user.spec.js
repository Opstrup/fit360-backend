const expect = require('chai').expect;

describe('User unit-test', () => {
    it('should pass', () => {
        const foo = 'foo';
        expect(foo).to.be.a('String');
    })
});