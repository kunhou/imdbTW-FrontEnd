<template>
<div>
  <el-row>
    <el-col :span="16"><MovieList :page="page"></MovieList></el-col>
    <el-col :span="8"><SideBar></SideBar></el-col>
  </el-row>
  <el-row>
    <el-col :span="16"><a class="button" @click="next">Next</a></el-col>
  </el-row>
</div>
</template>

<script>
import MovieList from '../components/MovieList'
import SideBar from '../components/SideBar'
export default {
  name: 'movie-list-view',
  components: { MovieList , SideBar},
  data () {
    return {
      page: 1
    }
  },
  methods: {
    next () {
      this.page++
    }
  }
}
</script>

<style scoped>
  .button {
    display: block;
    width: 100%;
    background: #212121;
    color: #fff;
    font-weight: bold;
    text-align: center;
    padding: 1em;
    cursor: pointer;
    text-decoration: none;
  }
</style>