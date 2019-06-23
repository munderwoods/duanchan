<template>
  <div class="review flex-row" v-if="review.score !== null">
    {{review.review}}
    {{review.score}}
    <div v-if="user && (review.userId === user.id)">
      <button @click="editReview()">
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
  props: ['review', 'movie'],
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

    editReview () {
      this.$eventBus.$emit('open_draft_review', { movie: this.movie, id: this.review.id, score: this.review.score, review: this.review.review })
    }
  }

}
</script>

<style lang="scss" scoped>
.review {
}
</style>
