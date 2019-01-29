import React, {Component} from 'react'

export default class Fizzbuzz extends Component {
	render() {
		let fbcomp = num => {
			const pElements = []
			for (let i=1;i<=num;i++) {
				pElements.push(<p>{fizzbuzzFunc(i)}</p>)
			}
			return pElements
		}
		return fbcomp(100)
	}
}

export const fizzbuzzFunc = num => {
	let answer = ''
	if (num % 3 === 0) {
		answer += 'fizz'
	}
	if (num % 5 === 0) {
		answer += 'buzz'
	}
	if (answer === '') {
		answer = num.toString()
	}
	return answer
}