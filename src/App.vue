<template>
  <div>
    <h3>本示例结合了 ElementUi 实现</h3>
    <h3>基础用法</h3>
    <base-demo></base-demo>
    <h3>自定义位置用法</h3>
    <custom-placement-demo></custom-placement-demo>
    <h3>在抽屉中使用表单</h3>
    <form-demo></form-demo>
  </div>
</template>

<script>
import BaseDemo from './demo/base.demo'
import CustomPlacementDemo from './demo/custom-placement.demo'
import FormDemo from './demo/form.demo'

export default {
  components: {
    BaseDemo,
    CustomPlacementDemo,
    FormDemo
  }
}
</script>

<style>
  h3 {
    margin: 20px 0;
    font-size: 22px;
    font-weight: 400;
    color: #1f2f3d;
  }
</style>
