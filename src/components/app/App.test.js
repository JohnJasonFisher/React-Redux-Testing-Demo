import React from 'react'
import App from './App'
import Fizzbuzz from '../fizzbuzz/fizzbuzz'
import Enzyme from 'enzyme'

describe('<App/>', () => {
	it('contains a <Fizzbuzz/>', () => {
		const wrapper = Enzyme.shallow(<App/>)
		expect(wrapper.containsMatchingElement(<Fizzbuzz/>)).toBe(true)
	})
})