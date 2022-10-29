# completion-array

Creates list of switches and invoke callback after all switches get switched
## api

`createCompletionArray` :
```js
import { createCompletionArray } from 'completion-array';

const [complete0, complete1] = createCompletionArray(2, () => console.log('all items completed'));

complete0()
complete0()
// nothing happend

complete1()
// logs: 'all items completed'

complete1()
complete0()
// nothing happend
```
`createCompletionFn` :
```js
import { createCompletionFn } from 'completion-array';

const complete = createCompletionFn(2, () => console.log('all items completed'));

complete(0)
complete(0)
// nothing happend

complete(1)
// logs: 'all items completed'

complete(1)
complete(0)
// nothing happend
```

Also you can check src/\_\_tests\_\_ in git repo for more examples.
## use case
Say your code needs to save completion state of a list of elements, and after all the elements are completed, perform some action. It's exactly the reason behind creation of this package.

## Author
email:
mrynoplanetashka@gmail.com

## License
MIT (See `LICENSE` for more info)