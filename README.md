# deepquery
> 深度拷贝

## 安装
```
  npm i deepquery --save
```

## 使用
``` js
var deepQuery = require('deepquery');
```
OR
``` js
import deepQuery from 'deepquery';
```

``` js
 const obj = {
      a: 1,
      b: {
        c: 2
      },
      items: [
        {
          name: 'item1',
        }
      ]
 };
 
 // 查询多层级节点
 deepQuery(obj, "b", "c"); // ==> 2
 
 // 查询不存在的节点返回值为 undefined
 deepQuery(obj, "b", "d"); // ==> undefined
 
 // 中间节点不存在 安全返回 undefined
 deepQuery(obj, "notexists", "d"); // ==> undefined
 
 // 使用默认值 || ''  如果查询结果不存在则返回 空字符
 deepQuery(obj, "b", "d") || ''; // ==> '' 
 
 // 支持数组索引
 deepQuery(obj, "items", 0, 'name'); // ==> item1
 deepQuery(obj, "items", 1, 'name') || ''; // ==> ''
 
 // 对象是undefined
 const objUndefined;
 deepQuery(objUndefined, "b", "items", 1, 'name') || ''; // ==> ''
 
```
