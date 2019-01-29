import React, {Component} from 'react'
import Fizzbuzz from '../fizzbuzz/Fizzbuzz'

class App extends Component {
	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<h1>Yay, React!</h1>
					<Fizzbuzz/>
				</header>
			</div>
		)
	}
}

export default App