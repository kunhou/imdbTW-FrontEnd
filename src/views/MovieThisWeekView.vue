<template>
<div>
  <el-row>
    <el-col :span="16"><MovieThisWeek></MovieThisWeek></el-col>
    <el-col :span="8"><SideBar></SideBar></el-col>
  </el-row>
</div>
</template>

<script>
import MovieThisWeek from '../components/MovieThisWeek'
import SideBar from '../components/SideBar'
export default {
  name: 'movie-this-week-view',
  components: { MovieThisWeek , SideBar},
  data () {
    return {}
  }
}
</script>