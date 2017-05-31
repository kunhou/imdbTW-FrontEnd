<template>
   <div class="main-nav">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">首頁</el-menu-item>
            <el-submenu index="2">
                <template slot="title">電影</template>
                <el-menu-item index="2-1">已上映</el-menu-item>
                <el-menu-item index="2-2">上映中</el-menu-item>
                <el-menu-item index="2-3">未上映</el-menu-item>
             </el-submenu>
        <el-menu-item index="3">關於我們</el-menu-item>
    </el-menu>
  </div>
</template>