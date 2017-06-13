<template>
  <div id="app" class="container">
    <HeaderBar></HeaderBar>
    <router-view></router-view>
    <FooterItem></FooterItem>
  </div>
</template>

<script>

import HeaderBar from './components/HeaderBar';
import FooterItem from './components/FooterItem';

export default {
  name: 'app',
  components: { HeaderBar, FooterItem },
}
</script>

<!-- 停止載入bootstrap
<style lang="scss">
@import '~bootstrap/dist/css/bootstrap.css';
</style>
-->