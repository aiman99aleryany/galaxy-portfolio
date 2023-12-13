# didn't know what to write here, so I wrote some code to explain. I hope it helps.

import { isEmpty, isNil, apply, equals } from 'ramda';

```
const build = (developer, food = 0, iceTea = 0) =>
        isNil(developer) || apply(equals(0), [food, iceTea]) ? new Error('Build has faild') : developer.start(food, iceTea)


const portfolio = (person, foodAmount, iceTea, build) => build(person, foodAmount, iceTea);

portfolio(panda, 50, 2, build);
```
