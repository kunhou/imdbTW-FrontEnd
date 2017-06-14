<template>
<div>
    <el-form ref="form" :model="form" label-width="80px" label-position="left">
      <el-form-item label="帳號">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密碼">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="確認密碼">
        <el-input v-model="form.password2"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交註冊</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <el-form ref="form" :model="form" label-width="80px" label-position="left">
      <el-form-item v-if="!authorized" label="Facebook登入">
        <el-button type="primary" @click="login">Login</el-button>
      </el-form-item>
      <el-form-item v-else label="Facebook登出">
        <el-button @click="logout">Logout</el-button>
      </el-form-item>
    </el-form>
</div>
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