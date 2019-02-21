import React, {Component} from 'react'
import Fizzbuzz from '../fizzbuzz/fizzbuzz'
import {connect} from 'react-redux'
import {getSecretMessage} from '../../store/root-selector'

export class App extends Component {
	render() {
		return (
			<div className='App' style={{backgroundColor: '#F5F5F5'}}>
				<header className='App-header'>
					<h1>Yay, React!</h1>
					<h2>{this.props.isConnectedToRedux ? 'Yay, Redux!' : 'Oh no, where\'s Redux!'}</h2>
					<Fizzbuzz num={100}/>
					{this.props.secretMessage ? <p>{this.props.secretMessage}</p> : null}
				</header>
			</div>
		)
	}
}

export const mapStateToProps = (State, props) => ({
	isConnectedToRedux: State.isConnectedToRedux,
	secretMessage: getSecretMessage(State),
	...props
})

export default connect(mapStateToProps)(App)