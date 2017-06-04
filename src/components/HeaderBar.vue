<template>

<el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">Morank</el-menu-item>
  <el-menu-item index="2"><router-link to="/">Home</router-link></el-menu-item>
  <el-menu-item index="3"><router-link to="/movie">Movie</router-link></el-menu-item>
  <el-menu-item index="4" style="float: right;"><router-link to="/register">註冊/登入</router-link></el-menu-item>
</el-menu>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>