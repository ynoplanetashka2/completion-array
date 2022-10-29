type completeFn = (index: number) => void

const isInt = (item: number) => (item|0) === item
const isValidIndex = (index: number, to: number = Number.MAX_SAFE_INTEGER) => {
	return (
        isInt(index)
		&& 0 <= index
		&& index < to
	)
}

const noOp = () => void 0
export function createCompletionFn(itemsCount: number, cb: () => void): completeFn {
    if (!isValidIndex(itemsCount)) {
        throw new TypeError(`invalid itemsCount: ${itemsCount}. expected positive integer.`)
    }
	if (itemsCount === 0) {
		cb()
		return noOp
	}
	let completionArray: boolean[] | null = Array(itemsCount).fill(false)
	return (index: number) => {
		if (!isValidIndex(index, itemsCount)) {
			throw new TypeError(`invalid index ${index}. array length is ${itemsCount}`)
		}
		if (completionArray === null) {
			return
		}
		completionArray[index] = true
		if (completionArray.every(item => item)) {
            // release memory allocated for array
			completionArray = null
			cb()
		}
	}
}