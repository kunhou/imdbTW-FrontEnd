<template>
<el-row class="movieList">
  <el-col :span="6" v-for="(o, index) in 6" :key="o" :offset="index > 0 ? 0 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="https://upload.wikimedia.org/wikipedia/zh/thumb/9/99/Dangal_Poster.jpg/220px-Dangal_Poster.jpg" class="image">
      <div style="padding: 14px;">
        <span> {{movieTitle}} </span>
        <div class="bottom clearfix">
          <el-rate
            v-model="value"
            disabled
            show-text
            text-color="#ff9900"
            text-template="{value}">
          </el-rate>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</template>

<style>
  .movieList{
    margin-top:10px;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

</style>

<script>
  export default {
    data() {
      return {
        value: 3.2,
        movieTitle: "我和我的冠軍女兒"
      }
    }
  }
</script>