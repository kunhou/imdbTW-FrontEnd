<template>
<div class="container">
  <el-row class="register" type="flex">
    <!-- <el-col :span="6"><hello :profile="profile"></hello></el-col> -->
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
import Hello from '../components/Hello'

 export default {
    name: 'register-view',
    components: { HeaderBar, Register, Hello},
    data() {
      return {
        // Facebook Login資料
        profile: {},
        authorized: false
      }
    },
  methods: {
    // 取得使用者的name,id,email
    getProfile () {
      FB.api('/me?fields=name,id,email', function (response) {
        console.log('res in graphAPI', response)
      })
    },
    // Facebook Login Function
    login () {
      let vm = this 
      FB.login( function (response){
        vm.statusChangeCallback(response) 
      },{
        scope: 'email, public_profile',
        return_scopes: true
      })
    },
    // Facebook Logout Function
    logout () {
      let vm = this
      FB.logout(function (response) {
        vm.statusChangeCallback(response)
      })
    },
    statusChangeCallback (response) {
      let vm = this
      if (response.status === 'connected') {
        vm.authorized = true
        vm.getProfile()
      } else if (response.status === 'not_authorized') {
        vm.authorized = false
      } else if (response.status === 'unknown') {
        vm.profile = {}
        vm.authorized = false
      } else {
        vm.authorized = false
      }
    }
  },
  mounted () {
    let vm = this

    // Facebook 初始化
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '1348672775187557',
        cookie     : true,
        xfbml      : true,
        version    : 'v2.9'
      });
      FB.AppEvents.logPageView();
      
      // Get Facebook Login Status
      FB.getLoginStatus( response =>{
        console.log('res', response) // 得到FB回傳的結果
      })
    };
  }
}
</script>

<style>
.register{
  margin-top:10px;
}
</style>
