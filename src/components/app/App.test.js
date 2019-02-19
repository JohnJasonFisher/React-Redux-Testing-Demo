import React from 'react'
import ConnectedApp, {App} from './App'
import {Provider} from 'react-redux'
import Enzyme from 'enzyme'
import configureStore from 'redux-mock-store'

const middlewares = []
const mockStore = configureStore(middlewares)

describe('Without Redux', () => {
	it('renders without crashing', () => {
		Enzyme.shallow(<App numbersFromStore={[]}/>)
	})
})

describe('With Redux', () => {
	const initialState = {}
	const store = mockStore(initialState)
	it('renders without crashing', () => {
		Enzyme.shallow(<Provider store={store}><ConnectedApp/></Provider>)
	})
})

