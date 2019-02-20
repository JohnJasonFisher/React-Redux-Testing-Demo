import React, {Component} from 'react'
import Fizzbuzz from '../fizzbuzz/fizzbuzz'

class App extends Component {
	render() {
		return (
			<div className='App' style={{backgroundColor: '#F5F5F5'}}>
				<header className='App-header'>
					<h1>Yay, React!</h1>
					<Fizzbuzz num={100}/>
				</header>
			</div>
		)
	}
}

export default App