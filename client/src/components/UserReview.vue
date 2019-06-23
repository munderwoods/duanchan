<template>
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
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'user-review',
  components: { },
  props: ['review'],
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
.review {
}
</style>
