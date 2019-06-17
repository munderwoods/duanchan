<template>
  <div class="library flex-column">
    <div v-for="movie in movies" :key="movie.id">
      {{movie.name}}
      <button v-if="(myReview(movie) && myReview(movie).watchList === 0) || !myReview(movie)">Add To Watchlist</button>
      <button v-if="myReview(movie).favorite === 0">Add To Favorites</button>
      <button v-if="myReview(movie).favorite === 1">Remove From Favorites</button>
      <button v-if="myReview(movie).status === 0">Mark As Watched</button>
      <button v-if="myReview(movie).status > 0">Mark As Un-Watched</button>
      <button v-if="!myReview(movie)">Review</button>
      <button v-else>Go To Review</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'library',
  components: { },
  data () {
    return {
    }
  },

  computed: {
    ...mapGetters([
      'movies',
      'user'
    ])
  },

  methods: {
    myReview(movie) {
      if(movie && movie.reviews && this.user) {
        return movie.Reviews.find(review => review.userId === this.user.id);
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.library {
}
</style>
