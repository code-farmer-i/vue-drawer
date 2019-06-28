<template>
  <div>
    <el-button type="primary" @click="visible = true">打开</el-button>
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