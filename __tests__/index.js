const createCompletionArray = require('../dist/')

describe('createCompletionArray', () => {
	it('should work properly with 2 items', cb => {
		const complete = createCompletionArray(2, cb)
		complete(0)
		complete(1)
	})
	it('should work properly with 1 item', (cb) => {
		const complete = createCompletionArray(1, cb)
		complete(0)
	})
	it('should\'t run on further calls after completion', () => {
		const afterComplete = jest.fn()
		const complete = createCompletionArray(1, afterComplete)
		complete(0)
		complete(0)
		expect(afterComplete.mock.calls.length).toBe(1)
	})
	it('should immediatly call callback if zero items passed', cb => {
		createCompletionArray(0, cb)
	})
	it('should\'t call callback if some items aren\'t complete', () => {
		const afterComplete = jest.fn()
		const complete = createCompletionArray(2, afterComplete)
		complete(1)
		expect(afterComplete.mock.calls.length).toBe(0)
	})
	it('should\'t do anything if some items completed multiple times', () => {
		const afterComplete = jest.fn()
		const complete = createCompletionArray(2, afterComplete)
		complete(1)
		complete(1)
		expect(afterComplete.mock.calls.length).toBe(0)
	})
})
