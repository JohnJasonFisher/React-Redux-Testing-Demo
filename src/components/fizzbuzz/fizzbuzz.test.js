import Enzyme from 'enzyme'
import Fizzbuzz, {fizzbuzzFunc} from './Fizzbuzz'
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

describe('<Fizzbuzz/>', () => {
	// this will not work, consider Enzyme
	xit('returns 100 p elements when props.num = 100', () => {
		const wrapper = <Fizzbuzz num={100}/>

		//received is <Fizzbuzz num={100}/>
		console.log(Object.keys(wrapper))
		expect(wrapper).toBe(100)
	})

	it('returns 100 p elements when props.num = 100', () => {
		const wrapper = Enzyme.shallow(<Fizzbuzz num={100}/>)
		const resultComp1 = <p style={{color: 'auto'}} key={'Fizzbuzz1'}>1</p>
		const resultComp3 = <p style={{color: '#41f46a'}} key={'Fizzbuzz3'}>fizz</p>

		expect(wrapper.length).toBe(100)
		expect(wrapper.get(0)).toEqual(resultComp1)
		expect(wrapper.get(2)).toEqual(resultComp3)
	})
})