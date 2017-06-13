<template>
  <div>
    <Banner></Banner>
    <el-row>
      <el-col :span="16"><p>I am Contetn, maybe news?</p></el-col>
      <el-col :span="8"><SideBar></SideBar></el-col>
    </el-row>
  </div>
</template>

<script>
//載入需要用的組件
import Banner from '../components/Banner'
import SideBar from '../components/SideBar'

export default {
  name: 'home-view',
  components: { Banner , SideBar},
  data () {
    return {}
  }
}
</script>
