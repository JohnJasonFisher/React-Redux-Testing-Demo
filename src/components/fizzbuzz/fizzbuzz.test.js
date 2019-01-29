import {fizzbuzzFunc} from './Fizzbuzz'

describe('fizzbuzzFunc(num)', () => {
	it('returns fizz when given a num % 3 === 0', () => {
		expect(fizzbuzzFunc(3)).toBe('fizz');
	});

	it('returns buzz when given a num % 5 === 0', () => {
		expect(fizzbuzzFunc(5)).toBe('buzz');
	});

	it('returns buzz when given a num % 5 === 0 && a num % 3 === 0', () => {
		expect(fizzbuzzFunc(15)).toBe('fizzbuzzFunc');
	});

	it('returns a number', () => {
		expect(fizzbuzzFunc(2)).toBe('2');
	});
});