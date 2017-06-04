<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 3" :key="item">
      <!-- 渲染過程使用默認圖片 -->
      <img v-bind:src="BannerImageSrc" />
    </el-carousel-item>
  </el-carousel>
</template>


<script>
export default {
    data () {
        return {
            //目標圖片的連結
            BannerImageSrc : 'http://www.newyorker.com/wp-content/uploads/2016/05/Lane-X-Men-1200.jpg',
        }
    }
}
</script>

<style>
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>