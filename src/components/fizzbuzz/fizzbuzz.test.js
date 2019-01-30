import {fizzbuzzFunc} from './Fizzbuzz'
import React from 'react'

describe('fizzbuzzFunc(num)', () => {

	let expectComp, resultComp
	beforeEach(() => {
		expectComp = null 
		resultComp = null
	})

	it('returns fizz when given a num % 3 === 0', () => {
		expectComp = fizzbuzzFunc(3)
		resultComp = <p style={{color: '#41f46a'}} key={'Fizzbuzz3'}>fizz</p>
		expect(expectComp).toEqual(resultComp)
	})

	it('returns buzz when given a num % 5 === 0', () => {
		expectComp = fizzbuzzFunc(5)
		resultComp = <p style={{color: 'blue'}} key={'Fizzbuzz5'}>buzz</p>
		expect(expectComp).toEqual(resultComp)
	})

	it('returns buzz when given a num % 5 === 0 && a num % 3 === 0', () => {
		expectComp = fizzbuzzFunc(15)
		resultComp = <p style={{color: '#41f1f4'}} key={'Fizzbuzz15'}>fizzbuzz</p>

		expect(expectComp).toEqual(resultComp)

		expect(expectComp.key).toBe('Fizzbuzz15')
		expect(expectComp.props.children).toBe('fizzbuzz')
		expect(expectComp.props.style.color).toBe('#41f1f4')
	})

	it('returns a number', () => {
		expectComp = fizzbuzzFunc(2)
		resultComp = <p style={{color: 'auto'}} key={'Fizzbuzz2'}>2</p>
		expect(expectComp).toEqual(resultComp)
	})
})