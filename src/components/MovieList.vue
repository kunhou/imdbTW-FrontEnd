<template>
<div>
<el-row class="listWrapper">
  <el-col class="movieList" :span="7" v-for="movie in movies" :offset="movies.length > 0 ? 1 : 0" :key="movies.id">
    <el-card :body-style="{ padding: '0px' }">
      <img :src="imgHost + movie.imgPath" class="image">
      <!--<img :src="axios.defaults.baseURL + movie.imgPath" class="image">-->
      <div style="padding: 14px;">
        <span> {{movie.cname}} </span>
        <!--<span> {{movie.ename}} </span>-->
        <div class="bottom clearfix">
          <el-rate
            v-model="movie.score"
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
</div>
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
        limit: 10,
        imgHost: CONFIG.API_HOST
      }
    },
    props: {
      page: {
        type: Number,
        default: 1
      }
    },
    created: function () {
      this.$http.get('other')
        .then((response) => {
          this.movies = response.data.result;
        })
          // .catch((response) => {
          //   /* 失敗，發生錯誤，然後...*/
          // })
          // .finally(() => {
          //   /* 不論成功失敗，都做些事 */
          // });
    },
    watch: {
      page (val) {
        this.$http.get('other')
          .then((response) => {
            this.movies = response.data.result;
        })
      }
    },
    methods: {
    get () {
      movie.$http({
        page: this.page,
        limit: this.limit
      }, (err, movies) => {
        if (err) {
          console.log(err)
        } else {
          this.movies = this.movies.concat(movies.data)
        }
      })
    }
  }
}
</script>