<template>
  <Flow v-show="showFlow" @close="toggleFlow(false)">
  <div slot="header"><h1>Review {{movie.name}}</h1></div>
    <div class="draft-review">

      <div v-if="error" class="error">{{error}}</div>
      <input
         type="number"
         name="score"
         v-model="score"
         min="0"
         max="10"
         placeholder="Score" />
      <br/>
      <textarea
         name="review"
         v-model="review"
         placeholder="Your review here..." />
      <br/>
      <button @click="submit">Submit</button>
    </div>
  </Flow>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Flow from './Flow'

export default {
  components: { Flow },
  data () {
    return {
      showFlow: false,
      score: null,
      review: null,
      error: '',
      id: null,
      movie: { name: '' }
    }
  },

  created () {
    this.$eventBus.$on('open_draft_review', data => {
      this.movie = data.movie
      this.score = data.score
      this.review = data.review
      this.id = data.id
      this.toggleFlow(true)
    })
  },

  computed: {
    ...mapGetters([
      'user'
    ])
  },

  methods: {
    ...mapActions([
      'updateReview'
    ]),

    toggleFlow (val) {
      if (!val) {
        this.score = null
        this.review = null
        this.error = ''
        this.id = null
        this.movie = { name: '' }
      }

      this.showFlow = val
    },

    submit () {
      if (this.score) {
        this.updateReview({
          movieId: this.movie.id,
          userId: this.user.id,
          review: this.review,
          id: this.id,
          score: this.score
        }).then(res => {
          if (res.success) {
            this.toggleFlow(false)
          } else {
            this.error = res.message
          }
        })
      } else {
        this.error = 'Score is required'
      }
    }
  }
}
</script>

<style scoped>
  .error {
    color: red;
  }
</style>
