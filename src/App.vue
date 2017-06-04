<template>
  <div id="app" class="container">
    <HeaderBar></HeaderBar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>

import HeaderBar from './components/HeaderBar';
import Footer from './components/Footer';

export default {
  name: 'app',
  components: { HeaderBar, Footer },
}
</script>

<!-- 停止載入bootstrap
<style lang="scss">
@import '~bootstrap/dist/css/bootstrap.css';
</style>
-->