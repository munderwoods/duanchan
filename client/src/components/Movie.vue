<template>
  <div class="movie flex-column">
    {{movie.name}}
    <button 
      v-if="user && (!movie.Reviews.find(review => review.userId === user.id))"
      @click="postReview({movieId: movie.id, userId: user.id, review: 'Test review2.', score: 5})"
    >Review</button>
    <div v-for="review in movie.Reviews" :key="review.id">
      {{review.review}}
      {{review.score}}
      <div v-if="user && (review.userId === user.id)">
        <button>
          Edit
        </button>
        <button>
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'movie',
  components: {},
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
      'postReview'
    ])
  }

}
</script>

<style lang="scss" scoped>
.movie {
  width: 100%;
}
</style>
