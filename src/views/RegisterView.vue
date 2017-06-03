<template>
<div class="container">
  <HeaderBar></HeaderBar>
  <div class="register">
    <Register></Register>
  </div>
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
  background:black;
}

.register el-row{
  text: center;
}
</style>
