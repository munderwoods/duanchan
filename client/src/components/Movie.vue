<template>
  <div class="movie flex-column">
    {{movie.name}}
    <MovieControls :movie="movie"/>
    <button
      v-if="user && (!movie.Reviews.find(review => review.userId === user.id))"
      @click="postReview({movieId: movie.id, userId: user.id, review: 'Test review2.', score: 5})"
    >Review</button>
    <div v-for="review in movie.Reviews" :key="review.id">
      <div class="review flex-row" v-if="review.review">
        {{review.review}}
        {{review.score}}
        <div v-if="user && (review.userId === user.id) && review.score">
          <button @click="editReview(movie, review)">
            Edit
          </button>
          <button @click="deleteReview({ id: review.id })">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MovieControls from './MovieControls'

export default {
  name: 'movie',
  components: { MovieControls },
  props: ['movie'],
  data () {
    return {
    }
  },

  computed: {
    ...mapGetters([
      'user'
    ])
  },

  methods: {
    ...mapActions([
      'postReview',
      'deleteReview',
      'updateReview'
    ]),

    editReview (movie, data) {
      if (data) {
        this.$eventBus.$emit('open_draft_review', { movie: this.movie, id: data.id, score: data.score, review: data.review })
      } else {
        this.$eventBus.$emit('open_draft_review', { movie: this.movie })
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.movie {
  width: 100%;
}
</style>
