<template>
  <div class="movie flex-column">
    <router-link :to="`/movie/${encodeURI(movie.name)}`">
    {{movie.name}}
    </router-link>
    <MovieControls :movie="movie"/>
  </div>
</template>

<script>
import MovieControls from './MovieControls'

export default {
  name: 'movie',
  components: {
    MovieControls
  },
  props: ['movie'],
  data () {
    return {
    }
  },

  computed: {
  },

  methods: {
  }

}
</script>

<style lang="scss" scoped>
.movie {
  width: 100%;
}
</style>
