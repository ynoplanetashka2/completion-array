import { createCompletionFn } from "./createCompletionFn";

export function createCompletionArray(itemsCount: number, cb: () => void) {
    const complete = createCompletionFn(itemsCount, cb)
    return Array.from(
        { length: itemsCount }, 
        (_, index) => complete.bind(null, index)
    )
}