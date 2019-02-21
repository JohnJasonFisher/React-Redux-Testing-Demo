import React from 'react'
import ConnectedApp, {App} from './App'
import Fizzbuzz from '../fizzbuzz/fizzbuzz'
import Enzyme from 'enzyme'
import initialState from '../../store/initial-state'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'

describe('<App/> Without Redux', () => {

	it('contains a <Fizzbuzz/>', () => {
		const wrapper = Enzyme.shallow(<App/>)
		expect(wrapper.containsMatchingElement(<Fizzbuzz/>)).toBe(true)
	})

	it('isConnectedToRedux: true returns Yay, Redux!', () => {
		const props = {numbersFromStore: [], isConnectedToRedux: true}
		const wrapper = Enzyme.shallow(<App {...props} />)
		const h2 = wrapper.find('h2')
		expect(h2).toHaveLength(1)
		expect(h2.text()).toBe('Yay, Redux!')
	})

	it('isConnectedToRedux: true returns "Oh no, where\'s Redux!"', () => {
		const props = {numbersFromStore: [], isConnectedToRedux: false}
		const wrapper = Enzyme.shallow(<App {...props} />)
		const h2 = wrapper.find('h2')
		expect(h2).toHaveLength(1)
		expect(h2.text()).toBe('Oh no, where\'s Redux!')
	})
})

describe('<ConnectedApp/> With Redux', () => {

	const middlewares = []
	const mockStore = configureStore(middlewares)
	const store = mockStore(initialState)

	it('contains a secret message', () => {
		const wrapper = Enzyme.mount(<Provider store={store}><ConnectedApp/></Provider>)

		// one element
		const h2Msg = wrapper.find('h2').text()
		expect(h2Msg).toBe('Yay, Redux!')

		// an array of elements
		const pMsg = wrapper.find('p').get(100).props.children
		expect(pMsg).toBe('Tacos are awesome!')
	})
})