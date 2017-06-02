<template>
<div class="container">
    <HeaderBar></HeaderBar>
    <MovieList></MovieList>
</div>
</template>

<script>
import HeaderBar from '../components/HeaderBar'
import MovieList from '../components/MovieList'

export default {
  name: 'movie-view',
  components: { HeaderBar, MovieList },
  data () {
    return {}
  }
}
</script>

<style>

</style>
