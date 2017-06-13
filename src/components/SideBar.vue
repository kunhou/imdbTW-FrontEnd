<template>
<div>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="line-height: 36px;">本週新片</span>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      {{'列表内容 ' + o }}
    </div>
    <!-- <div v-for="movie in movies" :key="o" class="text item">
      <span> {{movie.cname}} </span>
    </div> -->
  </el-card>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="line-height: 36px;">熱門排行</span>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      {{'列表内容 ' + o }}
    </div>
  </el-card>
</div>
</template>


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
    },

    computed: {
      filteredItems: function () {
        return this.movies.slice(0, 4)
      }
    }
  }
</script>

<style>
  .box-card{
    margin-top:10px;
  }
</style>