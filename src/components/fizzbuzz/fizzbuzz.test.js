import fizzbuzz from './fizzbuzz'

// We are testing a regular JS function
describe('fizzbuzz', () => {
	it('given 1 returns 1', () => {
		const value = fizzbuzz(1)
		expect(value).toBe(1)
	})

	it('given 3 returns fizz', () => {
		const value = fizzbuzz(3)
		expect(value).toBe('fizz')
	})

	it('given 5 returns buzz', () => {
		const value = fizzbuzz(5)
		expect(value).toBe('buzz')
	})

	it('given 15 returns fizzbuzz', () => {
		const value = fizzbuzz(15)
		expect(value).toBe('fizzbuzz')
	})
})