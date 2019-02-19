import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/App.js'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './store/root-reducer'

export const store = createStore(
	rootReducer,
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