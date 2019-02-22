import React, {Component} from 'react'

export class AddFizzbuzzNum extends Component {
	state = {number: ''}

	handleClick = event => {
		event.preventDefault()
		// addNum: num => dispatch(ADD_NUM(num))
		this.props.addNum(parseInt(this.state.number, 10))
		this.setState({number: ''})
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

export default AddFizzbuzzNum