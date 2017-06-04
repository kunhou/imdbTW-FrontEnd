<template>
<div>
  <el-row>
    <el-col span="16"><MovieList></MovieList></el-col>
    <el-col span="8"><SideBar></SideBar></el-col>
  </el-row>
</div>
</template>

<script>
import MovieList from '../components/MovieList'
import SideBar from '../components/SideBar'

export default {
  name: 'movie-view',
  components: { MovieList , SideBar},
  data () {
    return {}
  }
}
</script>

<style>

</style>
