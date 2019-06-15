<template>
  <div class="Movies">
    <h1>Movies</h1>
    <Movie v-for="movie in movies" :key="movie.title" :movie="movie"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Movie from './Movie'
export default {
  name: 'movies',
  components: { Movie },
  data () {
    return {
    }
  },

  computed: {
    ...mapGetters([
      'movies'
    ])
  },

  methods: {
  }

}
</script>

<style lang="scss" scoped>
</style>
