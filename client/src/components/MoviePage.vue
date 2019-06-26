<template>
  <div class="movie-page" v-if="movie">
    {{movie.name}}
    <MovieControls :movie="movie"/>
    <UserReviews :movie="movie"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserReviews from './UserReviews'
import MovieControls from './MovieControls'
export default {
  name: 'movie-page',
  components: {
    UserReviews,
    MovieControls
  },
  data () {
    return {
    }
  },

  computed: {
    ...mapGetters([
      'movies'
    ]),

    movie () {
      if (this.movies) {
        return this.movies.find(movie => movie.name === this.$route.params.name)
      }
    }
  },

  methods: {
  }

}
</script>

<style lang="scss" scoped>
.movie-page {
}
</style>
