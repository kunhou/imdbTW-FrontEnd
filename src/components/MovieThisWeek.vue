<template>
<el-row class="listWrapper">
  <el-col class="movieList" :span="7" v-for="movie in movies" :offset="movies.length > 0 ? 1 : 0" :key="movies.id">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="imgHost + movie.imgPath" class="image">
      <!--<img :src="axios.defaults.baseURL + movie.imgPath" class="image">-->
      <div style="padding: 14px;">
        <span> {{movie.cname}} </span>
        <span> {{movie.ename}} </span>
        <!-- <div class="bottom clearfix">
          <el-rate
            v-model="movie.score"
            disabled
            show-text
            text-color="#ff9900"
            text-template="{value}">
          </el-rate> -->
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</template>

<style>
  .listWrapper{
    margin-right:5%;
  }
  .movieList {
    margin-top:10px;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .image {
    width: 100%;
    height: 272px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

</style>

<script>
  import * as CONFIG from '../config'
  export default {
    data() {
      return {
        // value: 3.2,
        // movieTitle: "我和我的冠軍女兒"
        movies: [],
        imgHost: CONFIG.API_HOST
      }
    },
    created: function () {
      this.$http.get('this_week')
        .then((response) => {
          this.movies = response.data.result;
        })
          // .catch((response) => {
          //   /* 失敗，發生錯誤，然後...*/
          // })
          // .finally(() => {
          //   /* 不論成功失敗，都做些事 */
          // });
    }
  }
</script>