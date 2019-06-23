<template>
  <div v-if="user" class="movie-controls flex-row">
    <div v-if="myReview">
      <button
        v-if="myReview.status"
        @click="updateReview({
          id: myReview.id,
          status: 0,
          favorite: 0,
          userId: user.id,
          movieId: movie.id
        })"
      >Mark as Unwatched</button>
      <button
        v-else
        @click="updateReview({
          id: myReview.id,
          status: 1,
          watchList: 0,
          userId: user.id,
          movieId: movie.id
        })"
      >Mark as Watched</button>
      <button
        v-if="myReview.favorite"
        @click="updateReview({
          id: myReview.id,
          favorite: 0,
          userId: user.id,
          movieId: movie.id
        })"
      >Remove From Favorites</button>
      <button
        v-else
        @click="updateReview({
          id: myReview.id,
          favorite: 1,
          status: 1,
          userId: user.id,
          movieId: movie.id
        })"
      >Add to Favorites</button>
      <button
        v-if="myReview.watchList"
        @click="updateReview({
          id: myReview.id,
          watchList: 0,
          userId: user.id,
          movieId: movie.id
        })"
      >Remove From Watch List</button>
      <button
        v-else
        @click="updateReview({
          id: myReview.id,
          watchList: 1,
          userId: user.id,
          movieId: movie.id
        })"
      >Add to Watch List</button>
      <button
        v-if="myReview.score !== null"
        @click="review({ id: myReview.id, review: myReview.review, score: myReview.score })"
      >Edit Review</button>
      <button
        v-else
        @click="review()"
      >Review Film</button>
    </div>

    <div v-else class="flex-row">
      <button
        @click="postReview({
          status: 1,
          userId: user.id,
          movieId: movie.id
        })"
      >Mark as Watched</button>
      <button
        @click="postReview({
          favorite: 1,
          status: 1,
          userId: user.id,
          movieId: movie.id
        })"
      >Add to Favorites</button>
      <button
        @click="postReview({
          watchList: 1,
          userId: user.id,
          movieId: movie.id
        })"
      >Add to WatchList</button>
      <button
        @click="review()"
      >Review Film</button>
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
    ]),

    myReview () {
      return this.movie.Reviews.find(review => review.userId === this.user.id)
    }
  },

  methods: {
    ...mapActions([
      'postReview',
      'updateReview'
    ]),

    review () {
      if (this.myReview) {
        this.$eventBus.$emit('open_draft_review', {
          movie: this.movie,
          id: this.myReview.id,
          score: this.myReview.score,
          review: this.myReview.review
        })
      } else {
        this.$eventBus.$emit('open_draft_review', { movie: this.movie })
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.library-list {
}
</style>
