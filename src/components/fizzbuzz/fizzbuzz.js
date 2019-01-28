export default num => {
	let answer = ''
	if (num % 3 === 0) {
		answer += 'fizz'
	}
	if (num % 5 === 0) {
		answer += 'buzz'
	}
	if (answer === '') {
		answer = num
	}
	return answer
}