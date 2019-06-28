# vue-drawer-component

一个基于vue实现的抽屉组件

![image](./demo.png)

[点击查看在线demo](https://code-farmer-i.github.io/vue-drawer/dist/)

## Install
```shell
npm install vue-drawer-component -S
```

## Quick Start
``` javascript
import VueDrawer from 'vue-drawer-component'
import 'vue-drawer-component/src/index.css'

Vue.component(VueDrawer.name, VueDrawer)
```

### 基础用法
```html
<template>
  <div>
    <vue-drawer :visible.sync="visible">
      <div slot="header">
        Basic Drawer
      </div>
      <div slot="body">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </div>
    </vue-drawer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  }
}
</script>
```

## API

### Props:

属性  |  说明  |  类型  |  默认值
:-------: | -------  |  :-------:  |  :-------:
visible  |  是否显示抽屉  |  Boolean  |  false
placement  |  抽屉的方向  |  'top' | 'right' | 'bottom' | 'left' |  'right'
header-footer-fixed  |  头部与底部是否固定  |  Boolean |  true
mask-closable  |  点击蒙层是否允许关闭  |  Boolean |  true
mask  |  是否展示遮罩  |  Boolean |  true
width  |  宽度  |  String, Number  |  256
height  |  高度, 在 placement 为 top 或 bottom 时使用  |  String, Number  |  256
zIndex  |  设置 Drawer 的 z-index  |  Number  |  1000
afterClose  |  关闭之后的回调  |  Function  |  --
beforeClose  |  关闭之前的回调，可用于做拦截，一定要调用next钩子  |  Function(next)  |  --

作者wx: ckang1229

