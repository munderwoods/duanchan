<template>
  <div v-if="movies" class="review-list flex-column">
    <div v-for="movie in movies" :key="movie.id">
      <div class="move flex-column" v-if="movie.Reviews[0]">
        {{movie.name}}
        <UserReview :review="movie.Reviews[0]" :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
import UserReview from './UserReview'
export default {
  name: 'review-list',
  components: { UserReview },
  props: ['movies'],
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.review-list {
}
</style>
