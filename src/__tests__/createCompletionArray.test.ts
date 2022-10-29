import { describe, it, expect } from '@jest/globals'

import { createCompletionArray } from '../createCompletionArray'

describe('createCompletionArray', () => {
	it('should work properly with 2 items', cb => {
		const [complete0, complete1] = createCompletionArray(2, cb)
		complete0()
		complete1()
	})
	it('should work properly with 1 item', cb => {
		const [complete] = createCompletionArray(1, cb)
		complete()
	})
	it(`shouldn't do anithing if complete called after completion`, cb => {
		const afterComplete = jest.fn()
		const [complete] = createCompletionArray(1, afterComplete)
		complete()
		complete()
		expect(afterComplete.mock.calls.length).toBe(1)
        cb()
	})
	it('should immediatly call callback if zero items passed', cb => {
		createCompletionArray(0, cb)
	})
    it(`should return empty array if zero items passed`, () => {
        const arr = createCompletionArray(0, () => {})
        expect(arr.length).toBe(0)
    })
	it(`should't call callback if some items aren't complete`, cb => {
		const afterComplete = jest.fn()
		const [complete0, complete1] = createCompletionArray(2, afterComplete)
		complete0()
		expect(afterComplete.mock.calls.length).toBe(0)
        cb()
	})
	it(`should't do anything if some items completed multiple times`, cb => {
		const afterComplete = jest.fn()
		const [complete0, complete1] = createCompletionArray(2, afterComplete)
		complete0()
		complete0()
		expect(afterComplete.mock.calls.length).toBe(0)
        cb()
	})
})