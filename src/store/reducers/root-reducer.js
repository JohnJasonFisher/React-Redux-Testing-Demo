import {ADD_NUM_Action} from '../actions/root-action'

export default (state = {}, action) => {
	switch (action.type) {
		case ADD_NUM_Action:
			const newNumbers = [...state.numbers, action.payload.number]
			return {...state, numbers: newNumbers}
		default:
			return state
	}
}