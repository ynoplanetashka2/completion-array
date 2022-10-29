import { describe, it, expect } from "@jest/globals"

import { createCompletionFn } from "../createCompletionFn";

describe('createCompleteFn', () => {
	it('should work properly with 2 items', cb => {
		const complete = createCompletionFn(2, cb)
		complete(0)
		complete(1)
	})
	it('should work properly with 1 item', cb => {
		const complete = createCompletionFn(1, cb)
		complete(0)
	})
	it(`shouldn't do anithing if complete called after completion`, () => {
		const afterComplete = jest.fn()
		const complete = createCompletionFn(1, afterComplete)
		complete(0)
		complete(0)
		expect(afterComplete.mock.calls.length).toBe(1)
	})
	it('should immediatly call callback if zero items passed', cb => {
		createCompletionFn(0, cb)
	})
    it(`should return noOp function if zero items passed`, () => {
        const complete = createCompletionFn(0, () => {})
        expect(complete).not.toThrow()
    })
	it(`should't call callback if some items aren't complete`, () => {
		const afterComplete = jest.fn()
		const complete = createCompletionFn(2, afterComplete)
		complete(1)
		expect(afterComplete.mock.calls.length).toBe(0)
	})
	it(`should't do anything if some items completed multiple times`, () => {
		const afterComplete = jest.fn()
		const complete = createCompletionFn(2, afterComplete)
		complete(1)
		complete(1)
		expect(afterComplete.mock.calls.length).toBe(0)
	})
})