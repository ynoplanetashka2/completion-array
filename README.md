# completion-array

## purpose
Creates list of switches and invoke callback after all switches get switched
## api
```js
import { createComplitionArray } from 'completion-array';

const [complete0, complete1] = createCompletionArray(2, () => console.log('all items completed'));

complete0()
complete0()
// nothing happend

complete1()
// logs: 'all items completed'

complete1()
// nothing happend
```
## use case
Say your code should keep completion state of list of items, and after all items get complete perform some action. It's exactly the reason behind creation of this package.

## Author
email:
mrynoplanetashka@gmail.com

## License
MIT (See `LICENSE` for more info)