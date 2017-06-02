<template>
  <div class="container">
    <HeaderBar></HeaderBar>
    <Banner></Banner>
  </div>
</template>

<script>
//載入需要用的組件
import HeaderBar from '../components/HeaderBar'
import Banner from '../components/Banner'

export default {
  name: 'home-view',
  components: { HeaderBar, Banner },
  data () {
    return {}
  }
}
</script>

<style>

</style>
