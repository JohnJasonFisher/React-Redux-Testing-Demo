import React, {Component} from 'react'
import {connect} from 'react-redux'
import {ADD_NUM} from '../../store/root-action'

export class AddFizzbuzzNum extends Component {
	state = {number: ''}

	handleClick = event => {
		event.preventDefault()
		this.props.addNum(parseInt(this.state.number, 10))
		this.setState({number: ''})
		console.log(this.state)
	}

	handleChange = event => {
		this.setState({number: event.target.value})
	}
	
	render() {
		return <div className='AddFizzbuzzNum'>
			<input type='number' onChange={this.handleChange} value={this.state.number}/>
			<button onClick={this.handleClick}>Add Number</button>
		</div>
	}
}

const mapStateToProps = (state, props) => ({
	...props
})

const mapDispatchToProps = (dispatch, props) => ({
	addNum: num => dispatch(ADD_NUM(num)),
	...props
})

export default connect(mapStateToProps, mapDispatchToProps)(AddFizzbuzzNum)