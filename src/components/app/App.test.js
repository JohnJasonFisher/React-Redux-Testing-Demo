import React from 'react'
import ConnectedApp, {App, mapDispatchToProps} from './App'
import {Provider} from 'react-redux'
import Enzyme from 'enzyme'
import configureStore from 'redux-mock-store'

const middlewares = []
const mockStore = configureStore(middlewares)

describe('Without Redux', () => {
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

describe('With Redux', () => {
	const initialState = {
		isConnectedToRedux: true,
		secretMessage: 'Tacos are awesome!',
		numbers: []
	}
	const store = mockStore(initialState)

	it('renders without crashing', () => {
		Enzyme.shallow(<Provider store={store}><ConnectedApp/></Provider>)
	})

	it('renders without crashing', () => {
		mapDispatchToProps(store.dispatch, {}).addNum(10)

		const actions = store.getActions()
		expect(actions).toHaveLength(1);
	})
})