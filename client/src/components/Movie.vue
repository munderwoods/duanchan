<template>
  <div class="movie flex-column">
    {{movie.name}}
    <MovieControls :movie="movie"/>
    <button
      v-if="user && (!movie.Reviews.find(review => review.userId === user.id))"
      @click="editReview(movie)"
    >Review</button>
    <div class="reviews flex-column" v-for="review in movie.Reviews" :key="review.id">
      <UserReview v-if="review.review" :review="review" :movie="movie"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MovieControls from './MovieControls'
import UserReview from './UserReview'

export default {
  name: 'movie',
  components: {
    MovieControls,
    UserReview
  },
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
