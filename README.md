# get-prop

Obtains the value of an object or array, according to a string or array type map.

## install

```
npm install @uppercod/get-prop
```

### usage

```js
import getProp from "@uppercod/get-prop";

const data = {
    a: {
        b: {
            c: {
                d: "d",
            },
        },
    },
};

getProp(data, "a.b.c.d"); // d
getProp(data, "f", "..."); //...
```

### Selector Map Syntax

1. `a.b.c` equivalent to selector `data.a.b.c`.
2. `a.b[1]` equivalent to selector `data.a.b[1]`.
3. `a/b/c` equivalent to selector `data.a.b.c`.
4. `["a","b","c"]` equivalent to selector `data.a.b.c`.
