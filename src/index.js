import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/App.js'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './store/root-reducer'
import initialState from './store/initial-state'

const store = createStore(rootReducer, initialState)

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)