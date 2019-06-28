<template>
  <div>
    <el-radio v-model="placement" label="top">top</el-radio>
    <el-radio v-model="placement" label="right">right</el-radio>
    <el-radio v-model="placement" label="bottom">bottom</el-radio>
    <el-radio v-model="placement" label="left">left</el-radio>
    <el-button type="primary" @click="visible = true">打开</el-button>
    <vue-drawer :placement="placement" :visible.sync="visible">
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
        visible: false,
        placement: 'left'
      }
    }
  }
</script>