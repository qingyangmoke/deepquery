# deepquery
> 深度拷贝

## 安装
```
  npm i deepquery --save
```

## 使用
``` js
var deepquery = require('deepquery');
```
OR
``` js
import deepquery from 'deepquery';
```

``` js
 deepquery({
      a: 1,
      b: {
        c: 2
      }
    }, "b", "c"); // ==> 2
```
## API文档
[#docs/index.html](https://qingyangmoke.github.io/deepquery/docs/index.html)
