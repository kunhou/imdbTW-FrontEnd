<template>
<div>
<el-row class="listWrapper">
  <el-col class="movieList" :span="7" v-for="(movie, index) in movielist" :offset="movielist.length > 0 ? 1 : 0" :key="movie.id">
    <p>{{ (currPage-1) * countOfPage + index + 1 }}</p>
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
<div class="pagination">
    <ul>
    <li :class="{'disabled': (currPage === 1)}" 
        @click.prevent="setPage(currPage-1)"><a href="#">Prev</a></li>
    <li v-for="n in totalPage"
        :class="{'active': (currPage === (n))}" 
        @click.prevent="setPage(n)"><a href="#">{{n}}</a></li>
    <li :class="{'disabled': (currPage === totalPage)}" 
        @click.prevent="setPage(currPage+1)"><a href="#">Next</a></li>
    </ul>
</div>
<div>Filter: <input type="text" v-model="filter_name"></div>
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
      movielist: [],
      imgHost: CONFIG.API_HOST,
      countOfPage: 5,
      currPage: 1,
      filter_name: ''
    }
  },
  created: function () {
    this.$http.get('other')
      .then((response) => {
        this.movielist = response.data.result;
      })
        // .catch((response) => {
        //   /* 失敗，發生錯誤，然後...*/
        // })
        // .finally(() => {
        //   /* 不論成功失敗，都做些事 */
        // });
  },
  // 列表只顯示9項
  computed: {
    movielist: function () {
      return this.movies.slice(0, 9);
      // 因為 JavaScript 的 filter 有分大小寫，
      // 所以這裡將 filter_name 與 rows[n].name 通通轉小寫方便比對。
      var filter_name = this.filter_name.toLowerCase();
      // 如果 filter_name 有內容，回傳過濾後的資料，否則將原本的 rows 回傳。
      return ( this.filter_name.trim() !== '' ) ? 
          this.rows.filter(function(d){ return d.name.toLowerCase().indexOf(filter_name) > -1; }) : 
          this.rows;
    }
  }
}
</script>