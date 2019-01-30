import React, {Component} from 'react'
import Fizzbuzz from '../fizzbuzz/Fizzbuzz'
import {connect} from 'react-redux'

class App extends Component {
	render() {
		return (
			<div className='App' style={{backgroundColor: '#F5F5F5'}}>
				<header className='App-header'>
					<h1>Yay, React!</h1>
					<h2>{this.props.isConnectedToRedux ? 'Yay, Redux!' : 'Oh no, where\'s Redux!'}</h2>
					<Fizzbuzz num={100}/>
				</header>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
    isConnectedToRedux: state.isConnectedToRedux,
    ...props
})

export default connect(mapStateToProps)(App)