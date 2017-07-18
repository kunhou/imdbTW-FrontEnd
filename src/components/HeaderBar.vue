<template>

<el-menu theme="dark" :default-active="activeIndex" class="el-menu headerBar" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">Morank</el-menu-item>
  <el-menu-item index="2"><router-link to="/">Home</router-link></el-menu-item>
  <el-submenu index="3">
    <template slot="title"><router-link to="/movielist">Movie</router-link></template>
    <el-menu-item index="3-1"><router-link to="/moviethisweek">本週新片</router-link></el-menu-item>
    <el-menu-item index="3-2"><router-link to="/movielist">已上映</router-link></el-menu-item>
  </el-submenu>
  <el-menu-item index="4"><router-link to="/moviecontent">Movie Content</router-link></el-menu-item>
  <el-menu-item index="5" style="float: right;"><router-link to="/register">註冊/登入</router-link></el-menu-item>
</el-menu>
</template>

<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  a{
    text-decoration:none !important;
  }
</style>