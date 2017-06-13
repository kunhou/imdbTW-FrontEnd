<template>
<div class="container">
  <el-row class="register" type="flex">
    <el-col :span="6" class="layout"></el-col>
    <el-col :span="12"><Register></Register></el-col>
    <el-col :span="6" class="layout"></el-col>
  </el-row>
</div>
</template>

<script>
//載入需要用的組件
import HeaderBar from '../components/HeaderBar'
import Register from '../components/Register'

export default {
  name: 'register-view',
  components: { HeaderBar, Register},
  data () {
    return {}
  }
}
</script>

<style>
.register{
  margin-top:10px;
}

</style>
