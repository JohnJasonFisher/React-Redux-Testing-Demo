import fizzbuzz from './fizzbuzz'

describe('fizzbuzz(num)', () => {
	it('returns fizz when given a num % 3 === 0', () => {
		expect(fizzbuzz(3)).toBe('fizz');
	});

	it('returns buzz when given a num % 5 === 0', () => {
		expect(fizzbuzz(5)).toBe('buzz');
	});

	it('returns buzz when given a num % 5 === 0 && a num % 3 === 0', () => {
		expect(fizzbuzz(15)).toBe('fizzbuzz');
	});

	it('returns a number', () => {
		expect(fizzbuzz(2)).toBe('2');
	});
});