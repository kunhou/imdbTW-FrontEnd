<template>
<div>
<el-row>
  <el-col :span="6"><div class="grid-content bg-purple">MORANK基本介紹</div></el-col>
  <el-col :span="9"><div class="grid-content bg-purple-light">網站地圖</div></el-col>
  <el-col :span="9"><div class="grid-content bg-purple">追蹤我們</div></el-col>
</el-row>
<el-row>
  <el-col :span="24"><div class="grid-content" style="float: right;">Copyright © 2017 MORANK. all rights reserved</div></el-col>
</el-row>
</div>
</template>

<style>

  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
