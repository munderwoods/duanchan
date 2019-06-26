<template>
  <div class="reviews flex-column">
    <div v-for="review in movie.Reviews" :key="review.id">
      <UserReview v-if="review.review" :review="review" :movie="movie"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import UserReview from './UserReview'

export default {
  name: 'user-reviews',
  components: {
    UserReview
  },
  props: ['movie'],
  data () {
    return {
    }
  },

  mounted () {
    this.getReviews(this.movie.id)
  },

  computed: {
    ...mapGetters([
      'reviews'
    ])
  },

  methods: {
    ...mapActions([
      'getReviews'
    ])
  }

}
</script>

<style lang="scss" scoped>
.user-reviews {
}
</style>
