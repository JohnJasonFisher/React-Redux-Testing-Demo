import React, {Component} from 'react'
import Fizzbuzz, {fizzbuzzFunc} from '../fizzbuzz/Fizzbuzz'
import {connect} from 'react-redux'
import {getSecretMessage, getNumbers, getIsConnectedToRedux} from '../../store/root-selector'
import AddFizzbuzzNum from '../addFizzbuzzNum/AddFizzbuzzNum'
import {ADD_NUM} from '../../store/root-action'

export class App extends Component {
	render() {
		return (
			<div className='App' style={{backgroundColor: '#F5F5F5'}}>
				<header className='App-header'>
					<h1>Yay, React!</h1>
					<h2>{this.props.isConnectedToRedux ? 'Yay, Redux!' : 'Oh no, where\'s Redux!'}</h2>
					<AddFizzbuzzNum addNum={this.props.addNum}/>
					{this.props.numbersFromStore.map(number => fizzbuzzFunc(number))}
					<Fizzbuzz num={100}/>
					{this.props.secretMessage}
				</header>
			</div>
		)
	}
}

const mapStateToProps = (state, props) => ({
	isConnectedToRedux: getIsConnectedToRedux(state),
	secretMessage: getSecretMessage(state),
	numbersFromStore: getNumbers(state),
	...props
})

const mapDispatchToProps = (dispatch, props) => ({
	addNum: num => dispatch(ADD_NUM(num)),
	...props
})

export default connect(mapStateToProps, mapDispatchToProps)(App)