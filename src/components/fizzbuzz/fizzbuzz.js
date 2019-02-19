import React, {Component} from 'react'

export class Fizzbuzz extends Component {
	render() {
		const pElements = []
		for (let i=1;i<=this.props.num;i++) {
			pElements.push(fizzbuzzFunc(i))
		}
		return pElements
	}
}

export const fizzbuzzFunc = num => {
	let text = ''
	let textColor
	if (num % 3 === 0) {
		text = 'fizz'
		textColor = '#41f46a' //green
	}
	if (num % 5 === 0) {
		text = 'buzz'
		textColor = 'blue'
	}
	if (num % 5 === 0 && num % 3 === 0) {
		text = 'fizzbuzz'
		textColor = '#41f1f4' //cyan
	}
	if (text === '') {
		text = num.toString()
		textColor = 'auto' //black
	}
	let answer = <p style={{color: textColor}} key={'Fizzbuzz'+num}>{text}</p>
	return answer
}

export default Fizzbuzz