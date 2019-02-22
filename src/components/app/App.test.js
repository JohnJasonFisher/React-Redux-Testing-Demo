import React from 'react'
import ConnectedApp, {App, mapDispatchToProps} from './App'
import {Provider} from 'react-redux'
import Enzyme from 'enzyme'
import configureStore from 'redux-mock-store'
import initialState from '../../store/initial-state'

describe('<App/> Without Redux', () => {
	it('renders without crashing', () => {
		Enzyme.shallow(<App numbersFromStore={[15, 3, 5]}/>)
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

	it('renders elements for numbersFromStore', () => {
		// this tests numbersFromStore, should be 3 since <Fizzbuzz num={100}/> is not rendered
		const wrapper = Enzyme.shallow(<App numbersFromStore={[15000, 300, 500]}/>)
		const pElements = wrapper.find('p')
		expect(pElements).toHaveLength(3)
	})

	it('renders all child elements', () => {
		// mount renders all child componenets
		const wrapper = Enzyme.mount(<App numbersFromStore={[15000, 300, 500]}/>)
		const pElements = wrapper.find('p')
		expect(pElements).toHaveLength(103)
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

	it('how mock functions work', () => {
		const mockFunc = jest.fn((num1, num2) => num1 + num2)
		const result = mockFunc(1, 10)
		
		expect(result).toBe(11)
		expect(mockFunc).toHaveBeenCalled()
		expect(mockFunc).toHaveBeenCalledWith(1, 10)
	})

	it('addNum is a valid function', () => {
		const props = {}
		let dispatch = jest.fn()
		mapDispatchToProps(dispatch, props).addNum(10)

		expect(dispatch).toHaveBeenCalledTimes(1)
		expect(dispatch).toHaveBeenCalledWith({"payload": {"number": 10}, "type": "ADD_NUM_Action"})
	})
})