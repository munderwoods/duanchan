<template>
  <Flow v-show="showFlow" @close="toggleFlow(false)">
  <div slot="header"><h1>Review {{movie.name}}</h1></div>
    <div class="draft-review">

      <div v-if="error" class="error">{{error}}</div>
      <select v-model="score">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>

      <br/>
      <textarea
         maxlength="5000"
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
      score: 0,
      review: null,
      error: '',
      id: null,
      movie: { name: '' }
    }
  },

  created () {
    this.$eventBus.$on('open_draft_review', data => {
      this.movie = data.movie
      if (data.score) {
        this.score = data.score
      }
      if (data.review) {
        this.review = data.review
      }
      if (data.id) {
        this.id = data.id
      }
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
        this.score = 0
        this.review = null
        this.error = ''
        this.id = null
        this.movie = { name: '' }
      }

      this.showFlow = val
    },

    submit () {
      if (this.score !== null) {
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
