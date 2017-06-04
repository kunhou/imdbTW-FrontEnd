<template>
<div>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="line-height: 36px;">即將上映</span>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      {{'列表内容 ' + o }}
    </div>
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

<style>
  .box-card{
    margin-top:10px;
  }
</style>