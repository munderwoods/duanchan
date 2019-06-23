<template>
  <div v-if="library" class="library flex-row">
    <div class="flex-column">
      <h1>All Movies</h1>
      <LibraryList :movies="library"/>
    </div>
    <div class="flex-column">
      <h1>Your Favorites</h1>
      <LibraryList :movies="library.filter(movie => movie.Reviews[0] && movie.Reviews[0].favorite === 1)"/>
    </div>
    <div class="flex-column">
      <h1>Your Watch List</h1>
      <LibraryList :movies="library.filter(movie => movie.Reviews[0] && movie.Reviews[0].watchList === 1)"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LibraryList from './LibraryList'
export default {
  name: 'library',
  components: { LibraryList },
  data () {
    return {
    }
  },

  mounted () {
    this.getLibrary()
  },

  computed: {
    ...mapGetters([
      'user',
      'library'
    ])
  },

  methods: {
    ...mapActions([
      'getLibrary',
      'updateReview'
    ])
  }

}
</script>

<style lang="scss" scoped>
.library {
  align-items: flex-start;
}
</style>
