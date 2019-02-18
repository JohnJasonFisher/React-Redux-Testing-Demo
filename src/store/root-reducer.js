import {ADD_NUM_Action} from './root-action'

export default (state = {}, action) => {
	switch (action.type) {
		case ADD_NUM_Action:
			const newState = state
			state.numbers.push(action.payload.number)
			return newState
		default:
			return state
	}
}