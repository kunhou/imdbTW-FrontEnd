<template>
  <div id="app" class="container">
    <HeaderBar></HeaderBar>
    <router-view></router-view>
    <FooterBar></FooterBar>
  </div>
</template>

<script>

import HeaderBar from './components/HeaderBar';
import FooterBar from './components/FooterBar';

export default {
  name: 'app',
  components: { HeaderBar, FooterBar },
}
</script>

<!-- 停止載入bootstrap
<style lang="scss">
@import '~bootstrap/dist/css/bootstrap.css';
</style>
-->