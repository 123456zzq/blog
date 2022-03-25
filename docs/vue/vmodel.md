##Vue响应式原理

导出vue构造函数

```Js
import{initMixin} from './init';

function Vue(options) {
    this._init(options);
}
initMixin(Vue); // 给原型上新增_init方法
export default Vue;

```
