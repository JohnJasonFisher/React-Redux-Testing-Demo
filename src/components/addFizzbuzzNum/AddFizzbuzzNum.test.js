import React from 'react'
import AddFizzbuzzNum from './AddFizzbuzzNum'
import Enzyme from 'enzyme'

describe('<AddFizzbuzzNum/>', () => {
	it('should invoke handleClick onClick', () => {
		const addNumMock = jest.fn(num => `${num}`)
		const wrapper = Enzyme.shallow(<AddFizzbuzzNum addNum={addNumMock}/>)
		
		wrapper.setState({number: 10})
		expect(wrapper.state()).toEqual({number: 10})

		wrapper.instance().handleClick = jest.fn()
		wrapper.instance().forceUpdate()

		// you can just find the prop and invoke it
		// wrapper.find('button').props().onClick({preventDefault: jest.fn()})


		// you could use the .simulate method to simulate the method
		wrapper.find('button').simulate('click', { preventDefault() {} })

		expect(wrapper.instance().handleClick).toHaveBeenCalledTimes(1)
	})

	it('should invoke addNum(10) when state is set', () => {
		const addNumMock = jest.fn(num => `${num}`)
		const wrapper = Enzyme.shallow(<AddFizzbuzzNum addNum={addNumMock}/>)

		const newState = {number: 10}
		wrapper.setState(newState)
		expect(wrapper.state()).toEqual(newState)

		wrapper.find('button').simulate('click', { preventDefault() {} })

		expect(addNumMock).toHaveBeenCalledWith(10)
	});
})