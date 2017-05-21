<template>
  <div id="trailers-main">
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="熱門強檔" name="first">
            <el-row type="flex" :gutter="20" justify="center">
                <el-col :span="4">
                    <div class="trailers-content">
                        <div class="trailers-img">
                            <span><img src="../assets/movie.jpg"></img></span>
                        </div>
                        <div class="trailers-name">
                            <span><a href="#">我和我的冠軍女兒</a></span>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="trailers-content">
                        <div class="trailers-img">
                            <span><img src="../assets/movie.jpg"></img></span>
                        </div>
                        <div class="trailers-name">
                            <span><a href="#">我和我的冠軍女兒</a></span>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="trailers-content">
                        <div class="trailers-img">
                            <span><img src="../assets/movie.jpg"></img></span>
                        </div>
                        <div class="trailers-name">
                            <span><a href="#">我和我的冠軍女兒</a></span>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="trailers-content">
                        <div class="trailers-img">
                            <span><img src="../assets/movie.jpg"></img></span>
                        </div>
                        <div class="trailers-name">
                            <span><a href="#">我和我的冠軍女兒</a></span>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-tab-pane>
        <el-tab-pane label="近期上映" name="second">
            <el-row type="flex" :gutter="20" justify="center">
                <el-col :span="4">
                    <div class="trailers-content">
                        <div class="trailers-img">
                            <span><img src="../assets/movie2.jpeg"></img></span>
                        </div>
                        <div class="trailers-name">
                            <span><a href="#">喜歡你</a></span>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="trailers-content">
                        <div class="trailers-img">
                            <span><img src="../assets/movie2.jpeg"></img></span>
                        </div>
                        <div class="trailers-name">
                            <span><a href="#">喜歡你</a></span>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="trailers-content">
                        <div class="trailers-img">
                            <span><img src="../assets/movie2.jpeg"></img></span>
                        </div>
                        <div class="trailers-name">
                            <span><a href="#">喜歡你</a></span>
                        </div>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="trailers-content">
                        <div class="trailers-img">
                            <span><img src="../assets/movie2.jpeg"></img></span>
                        </div>
                        <div class="trailers-name">
                            <span><a href="#">喜歡你</a></span>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </el-tab-pane>
    </el-tabs>

  </div>
</template>

<style>
.el-tabs{
    width:90%;
    margin:auto;
}

.el-row {
    margin: 20px 0 20px 0;
}

.el-col{
    width:20%;
}  

.trailers-content {
    min-height: 36px;
  }
  
img{
    width:auto;
    max-height:240px;
    display:block;
    margin:auto;
}

a{
    width:auto;
    display:block;
    text-align: center;
}

</style>

<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>