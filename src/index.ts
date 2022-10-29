type fnT = () => void
type completeFn = (index: number) => void

const isInt = (item: number) => (item|0) === item
const isValidIndex = (index: number, from: number = 0, to: number) => {
	if (!isInt(index)) {
		return false
	}
	if (
		from <= index
		&& index < to
	) {
		return true
	}
}

const noOp = () => void 0
function createCompletionArray(itemsCount: number, cb: fnT): completeFn {
	if (itemsCount === 0) {
		cb()
		return noOp
	}
	let completionArray: boolean[] | null = new Array(itemsCount).fill(false)
	return (index: number) => {
		if (!isValidIndex(index, void 0, itemsCount)) {
			throw new TypeError(`invalid index ${index}. array length is ${itemsCount}`)
		}
		if (completionArray === null) {
			return
		}
		completionArray[index] = true
		if (completionArray.every(item => item)) {
			completionArray = null
			cb()
		}
	}
}

export = createCompletionArray
