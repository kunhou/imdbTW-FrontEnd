<template>
<div>
<el-row>
  <el-col :span="16"><MovieContent></MovieContent></el-col>
  <el-col :span="8"><SideBar></SideBar></el-col>
</el-row>
</div>
</template>

<script>
import MovieContent from '../components/MovieContent'
import SideBar from '../components/SideBar'

export default {
  name: 'movie-content-view',
  components: { MovieContent, SideBar },
  data () {
    return {}
  }
}
</script>