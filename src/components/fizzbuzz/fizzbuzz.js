export default num => {
	let answer = num
	if (num % 3 && num % 5) {
		answer = 'fizzbuzz'
	} else if (num % 3) {
		answer = 'fizz'
	} else if (num % 5) {
		answer = 'buzz'
	}
	return answer;
}