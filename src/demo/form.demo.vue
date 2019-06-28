<template>
  <div>
    <el-button type="primary" @click="visible = true">打开</el-button>
    <vue-drawer :visible.sync="visible" :width="720">
      <div slot="header">
        创建账户
      </div>
      <div slot="body">
        <el-form label-position="top">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="姓名">
                <el-input v-model="formData.name" placeholder="请填写姓名"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="性别">
                <el-select v-model="formData.sex" placeholder="请选择性别" style="width: 100%">
                  <el-option label="男" value="0"></el-option>
                  <el-option label="女" value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="年龄">
                <el-input v-model="formData.age" placeholder="请填写年龄"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="类型">
                <el-select v-model="formData.type" placeholder="请选择账户类型" style="width: 100%">
                  <el-option label="私有" value="0"></el-option>
                  <el-option label=公共 value="1"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col>
              <el-form-item label="备注">
                <el-input v-model="formData.remark" placeholder="请填写备注" type="textarea"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div slot="footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button @click="handleSubmit" type="primary">提交</el-button>
      </div>
    </vue-drawer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        visible: false,
        formData: {}
      }
    },
    methods: {
      handleCancel () {
        this.visible = false
      },
      handleSubmit () {
        console.log('submit')
        this.visible = false
      }
    }
  }
</script>