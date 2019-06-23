<template>
  <div v-if="movies" class="library-list flex-column">
    <div v-for="movie in movies" :key="movie.id">
      {{movie.name}}
      <MovieControls :movie="movie"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MovieControls from './MovieControls'
export default {
  name: 'librarylist',
  components: { MovieControls },
  props: ['movies'],
  data () {
    return {
    }
  },

  mounted () {
  },

  computed: {
    ...mapGetters([
      'user'
    ])
  },

  methods: {
    ...mapActions([
      'updateReview'
    ])
  }

}
</script>

<style lang="scss" scoped>
.library-list {
}
</style>
