---
title: JavaScript Array Methods Cheat Sheet
---

JavaScript arrays come with many built-in methods. Here are some of the most useful:

| Method      | Description                        | Example                      |
|-------------|------------------------------------|------------------------------|
| `map`       | Transform each element             | `[1,2,3].map(x => x*2)`      |
| `filter`    | Filter elements by condition       | `[1,2,3].filter(x => x>1)`   |
| `reduce`    | Accumulate values                  | `[1,2,3].reduce((a,b)=>a+b)` |
| `find`      | Find first matching element        | `[1,2,3].find(x => x===2)`   |
| `includes`  | Check if value exists              | `[1,2,3].includes(2)`        |

## Example

```js
const nums = [1, 2, 3];
const doubled = nums.map(x => x * 2); // [2, 4, 6]
```

See the [MDN Array docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) for more.
