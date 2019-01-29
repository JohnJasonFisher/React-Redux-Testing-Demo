import React, {Component} from 'react'
import Fizzbuzz from '../fizzbuzz/Fizzbuzz'

class App extends Component {
	render() {
		return (
			<div className='App' style={{backgroundColor: '#F5F5F5'}}>
				<header className='App-header'>
					<h1>Yay, React!</h1>
					<Fizzbuzz/>
				</header>
			</div>
		)
	}
}

export default App