<template>
  <div class="movie flex-column">
    {{movie.name}}
    <br>
    {{movie.genre}}
    {{JSON.parse(movie.director)[0]}}
    <br>
    <br>
  </div>
</template>

<script>

export default {
  name: 'movie',
  components: {},
  props: ['movie'],
  data () {
    return {
    }
  },

  computed: {
  },

  methods: {
  }

}
</script>

<style lang="scss" scoped>
.movie {
}
</style>
