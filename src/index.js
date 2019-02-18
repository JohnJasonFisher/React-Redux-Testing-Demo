import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/App.js'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import root from './store/root-reducer'

export const store = createStore(
	root,
	{
		isConnectedToRedux: true,
		secretMessage: 'Tacos are awesome!',
		numbers: []
	}
)

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)