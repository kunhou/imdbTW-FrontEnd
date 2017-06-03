<template>
<el-row type="flex" align="middle">
  <el-col :span="6">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="帳號">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="密碼">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="確認密碼">
        <el-input v-model="form.password2"></el-input>
      </el-form-item>
    </el-form>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交註冊</el-button>
      <el-button>取消</el-button>
   </el-form-item>
  </el-col>
</el-row>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          password: '',
          password2: '',
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>