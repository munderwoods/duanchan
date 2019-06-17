<template>
  <div class="library flex-column">
    <div v-for="movie in movies" :key="movie.id">
      {{movie.name}}
      <button v-if="(myReview(movie) && !myReview(movie).watchList) || !myReview(movie)">{{myReview(movie).watchList}}Add To Watchlist</button>
      <button v-else-if="myReview(movie) && myReview(movie.watchList) === 1">Remove From Watchlist</button>
      <button v-if="(myReview(movie) && !myReview(movie).favorites) || !myReview(movie)">Add To Favorites</button>
      <button v-else-if="myReview(movie) && myReview(movie).favorites === 1">Remove From Favorites</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'library',
  components: { },
  data () {
    return {
    }
  },

  mounted () {
    this.getReviews()
  },

  computed: {
    ...mapGetters([
      'movies',
      'user',
      'reviews'
    ])
  },

  methods: {
    ...mapActions([
      'getReviews'
    ]),

    myReview (movie) {
      if (movie && movie.Reviews && this.user) {
        return movie.Reviews.find(review => review.userId === this.user.id)
      } else return false
    }
  }

}
</script>

<style lang="scss" scoped>
.library {
}
</style>
