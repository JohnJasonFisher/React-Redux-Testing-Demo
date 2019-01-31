import React, {Component} from 'react'
import Fizzbuzz from '../fizzbuzz/Fizzbuzz'
import {connect} from 'react-redux'
import {getSecretMessage} from '../../store/root-selector'

class App extends Component {
	render() {
		const secretP = this.props.secretMessage ? <p>{this.props.secretMessage}</p> : null
		return (
			<div className='App' style={{backgroundColor: '#F5F5F5'}}>
				<header className='App-header'>
					<h1>Yay, React!</h1>
					<h2>{this.props.isConnectedToRedux ? 'Yay, Redux!' : 'Oh no, where\'s Redux!'}</h2>
					<Fizzbuzz num={100}/>
					{secretP}
				</header>
			</div>
		)
	}
}

const mapStateToProps = (State, props) => ({
	isConnectedToRedux: State.isConnectedToRedux,
	secretMessage: getSecretMessage(State),
	...props
})

export default connect(mapStateToProps)(App)