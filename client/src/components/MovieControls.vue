<template>
  <div v-if="user" class="movie-controls flex-row">
    <div v-if="movie.Reviews.find(review => review.userId === user.id)">
      <button
        v-if="movie.Reviews[0].status"
        @click="updateReview({
          id: movie.Reviews[0].id,
          status: 0,
          favorite: 0,
          userId: user.id,
          movieId: movie.id
        })"
      >Mark as Unwatched</button>
      <button
        v-else
        @click="updateReview({
          id: movie.Reviews[0].id,
          status: 1,
          watchList: 0,
          userId: user.id,
          movieId: movie.id
        })"
      >Mark as Watched</button>
      <button
        v-if="movie.Reviews[0].favorite"
        @click="updateReview({
          id: movie.Reviews[0].id,
          favorite: 0,
          userId: user.id,
          movieId: movie.id
        })"
      >Remove From Favorites</button>
      <button
        v-else
        @click="updateReview({
          id: movie.Reviews[0].id,
          favorite: 1,
          status: 1,
          userId: user.id,
          movieId: movie.id
        })"
      >Add to Favorites</button>
      <button
        v-if="movie.Reviews[0].watchList"
        @click="updateReview({
          id: movie.Reviews[0].id,
          watchList: 0,
          userId: user.id,
          movieId: movie.id
        })"
      >Remove From Watch List</button>
      <button
        v-else
        @click="updateReview({
          id: movie.Reviews[0].id,
          watchList: 1,
          userId: user.id,
          movieId: movie.id
        })"
      >Add to Watch List</button>
      <button
        v-if="movie.Reviews[0].score"
      >Go To Review</button>
      <button
        v-else
      >Review Film</button>
    </div>

    <div v-else class="flex-row">
      <button
        @click="updateReview({
          status: 1,
          userId: user.id,
          movieId: movie.id
        })"
      >Mark as Watched</button>
      <button
        @click="updateReview({
          favorite: 1,
          status: 1,
          userId: user.id,
          movieId: movie.id
        })"
      >Add to Favorites</button>
      <button
        @click="updateReview({
          watchList: 1,
          userId: user.id,
          movieId: movie.id
        })"
      >Add to WatchList</button>
      <button>Review Film</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'movie-controls',
  components: { },
  props: ['movie'],
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
