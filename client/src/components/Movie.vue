<template>
  <div class="movie flex-column">
    {{movie.name}}
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
  width: 100%;
}
</style>
