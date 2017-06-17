<template>
<div>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="line-height: 36px;">本週新片</span>
    </div>
    <!-- 需要只顯示前五項(Code待補) -->
    <ol class="this_week_sidebar">
    <div v-for="movie in movies" class="text item">
      <li>{{movie.cname}}</li>
    </div> 
    </ol>
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

    // 想要讓列表只顯示五項資訊
    // computed: {
    //   filteredItems: function () {
    //     return this.movies.slice(0, 4)
    //   }
    // }
  }
</script>

<style>
  .this_week_sidebar li{
    margin-left:-5%;
  }

  .box-card{
    margin-top:10px;
  }
</style>